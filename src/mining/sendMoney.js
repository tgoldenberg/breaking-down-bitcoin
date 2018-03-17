import BlockModel from 'models/Block';
import SHA256 from 'js-sha256';
import find from 'lodash/find';
import { getAddress } from 'utils/makeWallet';
import request from 'utils/request';
import { unlockTransaction } from 'utils/verifySignature';

const COIN = 100000000;

export async function getWalletData(address) {
  let balance = 0;
  let utxoMap = { };
  // keep map of balances
  // for each txin, subtract from the address
  // for each txout, add to the address balance
  let blocks = await BlockModel.find({ }).sort({ timestamp: 1 });
  for (let i = 0; i < blocks.length; i++) {
    let block = blocks[i];
    for (let j = 0; j < block.txs.length; j++) {
      let tx = block.txs[j];
      for (let k = 0; k < tx.vout.length; k++) {
        let txout = tx.vout[k];
        // convert publicKey to publicKeyHash => address
        let txAddress = txout.scriptPubKey;
        if (txAddress === address) {
          balance += txout.nValue / COIN;
          utxoMap[tx.hash] = { nValue: txout.nValue, n: k };
        }
      }
      for (let k = 0; k < tx.vin.length; k++) {
        let txin = tx.vin[k];
        if (txin.prevout !== 'COINBASE') {
          // find amount from previout tx and subtract from address
          let prevTxBlock = await BlockModel.findOne({ "txs.hash": txin.prevout });
          if (prevTxBlock) {
            let prevTx = find(prevTxBlock.txs, ({ hash }) => hash === txin.prevout);
            let prevTxOut = prevTx.vout[txin.n];
            let txAddress = prevTxOut.scriptPubKey;
            if (txAddress === address) {
              balance -= prevTxOut.nValue / COIN;
              delete utxoMap[txin.prevout];
            }
          }
        }
      }
    }
  }
  let utxo = Object.keys(utxoMap).map(txid => {
    return { txid: txid, n: utxoMap[txid].n, nValue: utxoMap[txid].nValue };
  })
  return { utxo, balance };
}

// curl -XPOST localhost:3000/send -d publicKey=044283eb5f9aa7421f646f266fbf5f7a72b7229a7b90a088d1fe45292844557b1d80ed9ac96d5b3ff8286e7794e05c28f70ae671c7fecd634dd278eb0373e6a3ba -d amount=10 -d privateKey=0fcb37c77f68a69b76cd5b160ac9c85877b4e8a09d8bcde2c778715c27f9a347 -d toAddress=1PDLNfJq5GAEn5StESZuBpaBe6B3134vmD | python -m json.tool
export async function sendMoney(req, res) {
  let { amount, privateKey, publicKey, toAddress } = req.body;
  if (!amount || !privateKey || !publicKey || !toAddress) {
    return res.status(500).send({ error: 'Missing parameters [amount|privateKey|publicKey|toAddress]'});
  }
  if (typeof amount === 'string') {
    amount = parseInt(amount);
  }
  amount *= COIN;
  console.log('> Amount to send: ', amount);
  let address = getAddress(publicKey);
  let walletData = await getWalletData(address);
  let { utxo, balance } = walletData;
  balance *= COIN;
  console.log('> Current balance: ', balance);
  utxo = utxo.sort((a, b) => a.nValue < b.nValue);
  // is transaction less than balance?
  let isLessThanBalance = balance > amount;
  if (!isLessThanBalance) {
    return res.status(500).send({ error: 'Balance must be above amount to send.' });
  }
  let remaining = amount;
  let vin = [ ];
  let vout = [ ];
  let spentTxs = [ ];
  ////////////////////////////////////
  //
  // create inputs and outputs
  //
  ////////////////////////////////////
  for (let i = 0; i < utxo.length; i++) {
    let tx = utxo[i];
    let remainder = tx.nValue - remaining;
    let spent = Math.min(remaining, tx.nValue);
    remaining -= spent;
    spentTxs.push(tx);
    vin.push({
      prevout: tx.txid,
      n: tx.n,
      scriptSig: `${publicKey} ${unlockTransaction(tx.txid, privateKey)}`,
    });
    vout.push({
      scriptPubKey: toAddress,
      nValue: spent,
    });
    if (tx.nValue - spent > 0) {
      // add vout to self of remaining
      vout.push({
        scriptPubKey: getAddress(publicKey),
        nValue: tx.nValue - spent,
      });
      break;
    }
    if (remaining <= 0) {
      break;
    }
  }
  let transaction = { hash: SHA256(JSON.stringify({ vin, vout })), vin, vout };
  // broadcast to network
  let url = 'https://pusher-presence-auth.herokuapp.com/transactions/new'; // can be http://localhost:3001/transactions/new if server running locally
  let body = { tx: transaction, timestamp: new Date().getTime() };
  let response = await request.post(url, body);
  console.log('> Send transaction response: ', response.data);
  res.status(200).send(response.data);
}
