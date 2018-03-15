import Block from 'classes/Block';
import BlockModel from 'models/Block';
import find from 'lodash/find';
import { verifyUnlock } from 'utils/verifySignature';

const COIN = 100000000;
const COINBASE_REWARD = 50 * COIN;

export async function areBlocksValid(blocks) {
  for (let i = 1; i < blocks.length; i++) {
    const isValidBlk = await isBlockValid(blocks[i], blocks[i-1]);
    if (!isValidBlk) {
      return false;
    }
  }
  return true;
}

export async function isBlockValid(block, prevBlock) {
  // check transactions
  const { txs } = block;
  // check that "previousHash" is correct
  if (block.previousHash !== prevBlock.hash) {
    return false;
  }
  for (let i = 0; i < txs.length; i++) {
    const isValidTx = await isTxValid(txs[i]);
    if (!isValidTx) {
      return false;
    }
  }
  // check nonce
  const target = Math.pow(2, 256 - block.difficulty);
  if (parseInt(block.hash, 16) > target) {
    return false;
  }
  return true;
}

export async function isTxValid(tx) {
  // verify has "vin" and "vout" as Arrays
  if (!tx.vin || !tx.vin.length || !tx.vout || !tx.vout.length) {
    return false;
  }
  let isCoinbase = false;
  let txinValue = 0;
  let txoutValue = 0;
  // check inputs
  for (let i = 0; i < tx.vin.length; i++) {
    const txin = tx.vin[i];
    if (txin.prevout === 'COINBASE') {
      // make sure only one coinbase tx
      if (tx.vout.length > 1 || tx.vin.length > 1 || tx.vout[i].nValue > COINBASE_REWARD) {
        // ensure coinbase is not greater than agreed on reward
        return false;
      }
      return true;
    }
    // validate regular input
    if (!txin.prevout || !txin.scriptSig || typeof txin.n != 'number') {
      return false;
    }
    // find previous UTXO
    let prevTxBlock = await BlockModel.findOne({ 'txs.hash': txin.prevout });
    if (!prevTxBlock) {
      return false;
    }
    let prevTx = find(prevTxBlock.txs, ({ hash }) => hash === txin.prevout);
    if (!prevTx) {
      return false;
    }
    txinValue += prevTx.vout[txin.n].nValue;
    // ensure that prevout is UXTO - prevent double spending
    let alreadySpentTxs = await BlockModel.find({ "txs.vin.prevout": txin.prevout });
    if (alreadySpentTxs.length > 1) {
      return false;
    }
    // verify signature
    let publicKeyScript = prevTx.vout[txin.n].scriptPubKey;
    let txid = prevTx.hash;
    let [ publicKey, scriptSig ] = txin.scriptSig.split(' ');
    let isVerified = verifyUnlock(txid, prevTx.vout[txin.n].scriptPubKey, publicKey, scriptSig);
    if (!isVerified) {
      return false;
    }
    // check transaction outputs
    for (let i = 0; i < tx.vout.length; i++) {
      let txout = tx.vout[i];
      if (typeof txout.nValue != 'number' || typeof txout.scriptPubKey != 'string') {
        return false;
      }
      txoutValue += txout.nValue;
    }
    // check that inputs are not less than outputs
    let totalFees = txinValue - txoutValue;
    if (totalFees < 0) {
      return false;
    }
    return true;
  }
}
