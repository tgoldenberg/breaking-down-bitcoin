import BlockClass from 'classes/Block';
import BlockModel from 'models/Block';
import SHA256 from 'js-sha256';
import { isNodeSynced } from '../net/isNodeSynced';
import { isTxValid } from 'utils/validateBlock';
import request from 'utils/request';
import store from 'store/store';
import uuid from 'uuid';

const MIN_TX_PER_BLOCK = 1;

export async function startMining() {
  console.log('> Starting to mine new block...');
  // check that process not already running
  let isRunning = store.getState().isMining;
  if (isRunning) {
    return false;
  }
  // check that all nodes are synced
  const isSynced = await isNodeSynced();

  // mining will restart once synced
  if (!isSynced) {
    store.dispatch({ type: 'STOP_MINING' });
    return false;
  }

  // collects transactions from mempool
  let txs = store.getState().memoryPool;

  // ensure that transaction length is > than minimum
  let numTxs = txs.length;
  if (numTxs < MIN_TX_PER_BLOCK) {
    console.log('> Waiting for txs to mine... checking in 20 seconds');
    store.dispatch({ type: 'STOP_MINING' });
    setTimeout(startMining, 20 * 1000); // check back in 20 seconds
    return false;
  }

  // verify all transactions in order - if any are invalid, remove from block
  console.log('> Validating txs for block....'.yellow);
  let finalizedTxs = [ ];
  for (let i = 0; i < numTxs; i++) {
    let tx = txs[i];
    if (isTxValid(tx)) {
      finalizedTxs.push(tx);
    }
  }
  // get last block
  let lastBlock = await BlockModel.findOne({ }).sort({ timestamp: -1 }).limit(1);
  // set block header and implement nonce
  let header = {
    version: 1,
    previousHash: lastBlock.hash,
    merkleHash: uuid(),
    timestamp: new Date().getTime(),
    difficulty: lastBlock.difficulty,
    nonce: 0
  };

  let newBlock = new BlockClass(header, finalizedTxs);

  store.dispatch({ type: 'START_MINING' });
  newBlock.findCorrectNonce();

  // console.log('> Finalized block: ', newBlock);
  store.dispatch({ type: 'STOP_MINING' });
  // submit new block with nonce and txs
  let url = 'https://pusher-presence-auth.herokuapp.com/blocks/new';
  let body = { block: newBlock.getDBFormat() };
  let response = await request.post(url, body);
  console.log('> Send block response: ', response.data);
  return true;
}
