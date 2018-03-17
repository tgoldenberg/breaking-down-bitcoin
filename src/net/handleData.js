import BlockModel from 'models/Block';
import { isBlockValid } from 'utils/validateBlock';
import { startMining } from 'mining/startMining';
import store from 'store/store';
import { wait } from 'utils/wait';

const DL = '~~~~~~';

export async function handleData(data) {
  const { client, isServer, ip } = this;
  console.log(data.split(DL).join(' '));
  // initialize variables
  let lastBlockHash, version, peerLastBlockHash, myVersion, peerLastBlock, blocks, blockheaders, block, index, lastBlock;
  let savedBlock, newBlock;
  // get message type
  const [ messageType, ...args ] = data.split(DL);
  switch(messageType) {
    case 'VERSION':
      // check if version is compatible
      [ version, peerLastBlockHash ] = args;
      myVersion = store.getState().version;
      if (myVersion.toString() !== version) {
        return;
      }
      // if isServer, send response VERSION message
      lastBlockHash = store.getState().lastBlock.hash;
      if (isServer) {
        client.write(['VERSION', 1, lastBlockHash].join(DL));
      }
      // if peer has same blockheader, set peer as synced
      if (peerLastBlockHash === lastBlockHash) {
        store.dispatch({ type: 'SYNC_PEER', ip });
        await startMining();
        return;
      }
      // check if peer has more blocks
      // if peer has more blocks, send response GETBLOCKS message
      peerLastBlock = await BlockModel.findOne({ hash: peerLastBlockHash });
      if (!peerLastBlock) {
        client.write(['GETBLOCKS', lastBlockHash].join(DL));
      } else {
        store.dispatch({ type: 'SYNC_PEER', ip });
        await startMining();
      }
      break;
    case 'GETBLOCKS':
      // scan if we have blocks after the block hash provided
      // if we have blocks, send response BLOCKHEADERS message
      peerLastBlockHash = args[0];
      peerLastBlock = await BlockModel.findOne({ hash: peerLastBlockHash });
      if (peerLastBlock) {
        blocks = await BlockModel.find({ timestamp: { $gt: peerLastBlock.timestamp } }).sort({ timestamp: 1 }).limit(50);
        client.write(['BLOCKHEADERS', ...blocks.map(({ hash }) => hash) ].join(DL));
      }
      break;
    case 'BLOCKHEADERS':
      // go through list of connected peers, and send REQUESTBLOCK evenly across network
      blockheaders = args;
      if (!blockheaders.length) {
        store.dispatch({ type: 'SYNC_PEER', ip });
        await startMining();
        return;
      }
      store.dispatch({ type: 'ADD_UNFETCHED_HEADERS', headers: blockheaders });
      let { allPeers: peers, unfetchedHeaders } = store.getState();
      blockheaders = Array.from(unfetchedHeaders);
      index = 0;
      while (blockheaders.length) {
        let peer = peers[index];
        if (!!peer.client) {
          let header = blockheaders.shift();
          peer.client.write(['REQUESTBLOCK', header].join(DL));
          store.dispatch({ type: 'LOADING_BLOCK', header });
          index = peers.length % (index + 1);
          await wait(1);
        }
      }
      break;
    case 'REQUESTBLOCK':
      // check if we have the requested block
      // if we have the block, serialize and send response SENDBLOCK message
      let header = args[0];
      block = await BlockModel.findOne({ hash: header });
      if (block) {
        let msg = JSON.stringify(block);
        client.write(['SENDBLOCK', JSON.stringify(block)].join(DL));
      }
      break;
    case 'SENDBLOCK':
      // validate block and its transactions
      // if block is valid, add it to MongoDB and update lastBlock and numBlocks in Redux store
      block = JSON.parse(args[0]);
      // check if already have
      savedBlock = await BlockModel.findOne({ hash: block.hash });
      if (savedBlock) {
        return;
      }
      // if don't have, does the previousHash match our lastBlock.hash?
      lastBlock = store.getState().lastBlock;
      if (!lastBlock) {
        break;
      }
      // validate block
      let isValid = await isBlockValid(block, lastBlock);
      if (isValid) {
        // add block to blockchain
        newBlock = new BlockModel(block);
        await newBlock.save();
        store.dispatch({ type: 'NEW_BLOCK', block: newBlock });
        let numBlocksToSave = store.getState().unfetchedHeaders.size;
        if (numBlocksToSave <= 0) {
          lastBlockHash = store.getState().lastBlock.hash;
          client.write(['GETBLOCKS', lastBlockHash].join(DL));
        }
        // remove from orphan and unfetched / loading pools
      }
      break;
  }
}
