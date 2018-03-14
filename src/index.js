import 'babel-polyfill';

import BlockModel from 'models/Block';
import Express from 'express';
import Pusher from 'pusher-js';
import bodyParser from 'body-parser';
import { connectToDB } from 'db/connectToDB';
import net from 'net';
import network from 'network';
import store from 'store/store';

// variables for Pusher network
const PUSHER_APP_KEY = '86e36fb6cb404d67a108'; // connect via public key
const MAX_PEERS = 25;

// initialize app server
const app = Express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.listen(process.env.PORT || 3000, async function() {
  console.log('> App server listening on port ', process.env.PORT);
  // connect with db
  const connectedToDB = await connectToDB();
  // get saved blocks
  const savedBlocks = await BlockModel.find({ });
  console.log('> Saved blocks: ', savedBlocks.length);
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
        peers.push(id);
      }
    });
    // only connect to a max of 25 nodes
    for (let i = 0; i < Math.min(MAX_PEERS, peers.length); i++) {
      await connectWithPeer(peers[i], 8334);
    }
  });

  // add basic networking
  const tcpServer = net.createServer();
  tcpServer.on('connection', handleConnection);
  tcpServer.listen(8334, '0.0.0.0', () => {
    console.log('> TCP/IP server listening on ', tcpServer.address());
  });
});

// given an IP address, establish a TCP/IP connection with the node
function connectWithPeer(ip, port) {
  const client = new net.Socket();

  client.connect(port, ip, () => {
    console.log('> Connected to peer: ', `${ip}:${port}`);
    // send version number and last block hash to peer
    client.write(`VERSION 1 00000244a5bae572247ca9f5b9149fc3980fa90a7a70cd35030a29d81ebc88ea`);
  });

  client.on('data', data => {
    console.log('> Received data from: ', `${ip}:${port}`, data);
  });
}

// when another node connects with our TCP/IP listener, respond accordingly
function handleConnection(conn) {
  console.log('> New client connection from: ', `${conn.remoteAddress}:${conn.remotePort}`);
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log('> Received data: ', data);
  });
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
