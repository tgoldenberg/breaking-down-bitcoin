import 'babel-polyfill';
import 'babel-register';

import { areBlocksValid, isTxValid } from 'utils/validateBlock';
import { getWalletData, sendMoney } from 'mining/sendMoney';

import BlockModel from 'models/Block';
import Express from 'express';
import Pusher from 'pusher-js';
import Transaction from 'models/Transaction';
import bodyParser from 'body-parser';
import { connectToDB } from 'db/connectToDB';
import find from 'lodash/find';
import { handleData } from './net/handleData';
import { isBlockValid } from 'utils/validateBlock';
import { isNodeSynced } from './net/isNodeSynced';
import { makeWallet } from 'utils/makeWallet';
import net from 'net';
import network from 'network';
import { seedBlocks } from '__mocks__/seedBlocks';
import { startMining } from 'mining/startMining';
import store from 'store/store';
import uniq from 'lodash/uniq';
import { verifySignature } from 'utils/verifySignature';

// variables for Pusher network
const PUSHER_APP_KEY = '86e36fb6cb404d67a108'; // connect via public key
const MAX_PEERS = 25;
const DL = '~~~~~~';

// initialize app server
const app = Express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.listen(process.env.PORT || 3000, async function() {
  console.log('> App server listening on port ', process.env.PORT);
  // connect with db
  const connectedToDB = await connectToDB();
  // seed database if SEED=true
  if (process.env.SEED === 'true') {
    await seedBlocks();
  }
  // get saved blocks
  let savedBlocks = await BlockModel.find({ });
  console.log('> Saved blocks: ', savedBlocks.length);
  // validate blocks
  const valid = await areBlocksValid(savedBlocks);
  if (!valid || !savedBlocks.length) {
    // initialize to genesis block
    savedBlocks = await seedBlocks(true);
  }

  store.dispatch({ type: 'SET_INITIAL_BLOCKS', blocks: savedBlocks });

  // get public facing IP address
  const ipAddr = await getIPAddress();
  // connect to pool of nodes via Pusher
  const pusher = new Pusher(PUSHER_APP_KEY, {
    auth: { params: { ip_addr: ipAddr, port: 8334 } },
    cluster: 'us2',
    authEndpoint: 'https://pusher-presence-auth.herokuapp.com/pusher/auth', // this can be changed to localhost
    encrypted: true,
  });

  // subscribe to channel with other nodes
  const channel = pusher.subscribe('presence-node-coin');
  // once our node is connected we can access all of the members
  channel.bind('pusher:subscription_succeeded', async (members) => {
    console.log('> pusher:subscription_succeeded: ', members);
    let peers = [ ];
    channel.members.each(({ id }) => {
      if (id !== ipAddr) {
        peers.push({ ip: id, port: 8334, connected: false, client: null, synced: false });
      }
    });
    store.dispatch({ type: 'SET_PEERS', allPeers: peers.slice(0, MAX_PEERS) });
    // only connect to a max of 25 nodes
    for (let i = 0; i < Math.min(MAX_PEERS, peers.length); i++) {
      await connectWithPeer(peers[i].ip, 8334);
    }
  });

  // MEMBER REMOVED
  channel.bind('pusher:member_removed', function(member){
    console.log('> pusher:member_removed: ', member);
    let allPeers = store.getState().allPeers;
    let newAllPeers = [ ];
    allPeers.forEach(peer => {
      if (peer.ip !== member.id) {
        newAllPeers.push(peer);
      }
    });
    store.dispatch({ type: 'SET_PEERS', allPeers: newAllPeers });
  });

  // MEMBER ADDED
  channel.bind('pusher:member_added', async function(member) {
    console.log('> pusher:member_added: ', member);
    let allPeers = store.getState().allPeers;
    allPeers.push({ ip: member.id, connected: false, client: null, synced: false });
    store.dispatch({ type: 'SET_PEERS', allPeers });
    // wait 30 seconds before initiating connection
    setTimeout(async () => {
      let allPeers = store.getState().allPeers;
      let peer = find(allPeers, ({ ip }) => ip === member.id);
      if (!peer || !peer.connected) {
        await connectWithPeer(member.id, 8334);
      }
    }, 10 * 1000);
  });

  channel.bind('transaction:new', async (data) => {
    console.log('> transaction:new: ', data.tx.hash);
    // validate transaction
    const isValid = await isTxValid(data.tx);
    if (isValid) {
      // add to memory pool of valid transactions
      store.dispatch({ type: 'NEW_TX', tx: data.tx });
    } else {
      console.log('> Invalid tx: ', data.tx.hash);
    }
  });

  channel.bind('block:new', async (data) => {
    console.log('> block:new: ', data);
    // is node synced ?
    const isSynced = await isNodeSynced();
    // validate block
    const lastBlock = store.getState().lastBlock;

    const isValid = await isBlockValid(data.block, lastBlock);
    console.log('> New block valid: ', isValid);

    if (isValid) {
      store.dispatch({ type: 'STOP_MINING' });
      let newBlock = new BlockModel(data.block);
      await newBlock.save();

      store.dispatch({ type: 'ADD_BLOCK', block: newBlock });
      await startMining();
    }
  });

  // add basic networking
  const tcpServer = net.createServer();
  tcpServer.on('connection', handleConnection);
  tcpServer.listen(8334, '0.0.0.0', () => {
    console.log('> TCP/IP server listening on ', tcpServer.address());
  });

  // API endpoints
  app.post('/send', sendMoney);
  // curl -XPOST localhost:3000/wallets/new | python -m json.tool
  app.post('/wallets/new', async function(req, res) {
    // generate new wallet and provide to user
    let wallet = await makeWallet();
    res.status(200).send({ wallet });
  });

  // curl -XGET localhost:3000/wallets/1Nd85AnFYDtaQAG6vF9FVWXFWksG5HuA3M | python -m json.tool
  app.get('/wallets/:address', async function (req, res) {
    let walletData = await getWalletData(req.params.address);
    let { utxo, balance } = walletData;
    res.status(200).send({ wallet: { balance }, utxo: utxo });
  });

});



// given an IP address, establish a TCP/IP connection with the node
function connectWithPeer(ip, port) {
  try {
    const client = new net.Socket();
    client.setEncoding('utf8');

    client.connect(port, ip, () => {
      console.log('> Connected to peer: ', `${ip}:${port}`);
      store.dispatch({ type: 'CONNECT_PEER', ip, client, port });
      // send version number and last block hash to peer
      let lastBlockHash = store.getState().lastBlock.hash;
      client.write(['VERSION', 1, lastBlockHash ].join(DL));
    });
    const ctx = { client, isServer: false, ip };
    client.on('data', handleData.bind(ctx));
    client.on('error', (err) => console.log(err));
  } catch (e) {
    console.log('> Could not connect with peer: ', e.message);
  }
}

// when another node connects with our TCP/IP listener, respond accordingly
function handleConnection(conn) {
  console.log('> New client connection from: ', `${conn.remoteAddress}:${conn.remotePort}`);
  conn.setEncoding('utf8');
  const ctx = { client: conn, isServer: true, ip: conn.remoteAddress };
  store.dispatch({ type: 'CONNECT_PEER', client: conn, ip: conn.remoteAddress, port: conn.remotePort });
  conn.on('data', handleData.bind(ctx));
  conn.on('error', (err) => console.log(err));
}

// get public facing IP address
function getIPAddress() {
  return new Promise((resolve, reject) => {
    network.get_public_ip((err, ip) => {
      if (err) {
        reject(err);
      }
      resolve(ip);
    });
  });
}
