import 'babel-polyfill';

import Block from 'classes/Block';
import BlockModel from 'models/Block';
import { unlockTransaction } from 'utils/verifySignature';
import uuid from 'uuid';

export const difficulty = 22;
export const COIN = 100000000;

export const myWallet = {
  privateKey: '0fcb37c77f68a69b76cd5b160ac9c85877b4e8a09d8bcde2c778715c27f9a347',
  publicKey:'044283eb5f9aa7421f646f266fbf5f7a72b7229a7b90a088d1fe45292844557b1d80ed9ac96d5b3ff8286e7794e05c28f70ae671c7fecd634dd278eb0373e6a3ba',
  publicKeyHash:'ed2f84f67943321bf73747936db3e7273ada7f6c',
  address:'1Nd85AnFYDtaQAG6vF9FVWXFWksG5HuA3M',
  privateKeyWIF:'5HwF1jU38V8YhpBy9PuNC4hTYkKrDccLE28qV7tLxZ7u3pKXCy4',
};

const friendWallet = {
  privateKey: '6128428978e30fc034c95b7b091b373b875bdd73a0acf83c09d37bff72361349',
  publicKey: '04804a9ed2855fcea0f5b6e23e587a6c6f7159f15c84b9c82474231cfdac04827fac72a36bd0b463fc61c4d66a954aa7d5f95bde970804f81c8d6f712390516fbb',
  publicKeyHash: 'f3a7ee518818e7adc56ed12e9f483712fc4dd0d5',
  address: '1PDLNfJq5GAEn5StESZuBpaBe6B3134vmD',
  privateKeyWIF: '5JZ5LHz7Kr3FXeU7asLfffasonpmxUX3smTQb8LtsD21UQqiYqo',
};

export async function seedBlocks(genesisOnly = false) {
  let result = [ ];
  console.log('> Seeding db with initial blocks...');
  let blk, header, cbTx, tx, newBlock;
  // remove existing blocks first from MongoDB
  await BlockModel.find({ }).remove({ });
  ////////////////////////////////////////////////////////
  //
  // load genesis block first
  //
  ///////////////////////////////////////////////////////
  blk = new Block({ }, [ ], true);
  blk.findCorrectNonce();
  // save genesis block to MongoDB
  newBlock = new BlockModel(blk.getDBFormat());
  await newBlock.save();
  result.push(newBlock);
  console.log('> Genesis block saved: ', newBlock.hash);
  if (genesisOnly) {
    return [ newBlock ];
  }
  ///////////////////////////////////////////////////////
  //
  // create new block that awards coinbase to friendWallet
  //
  ///////////////////////////////////////////////////////
  header = {
    version: 1,
    previousHash: newBlock.hash,
    merkleHash: uuid(), // we use a random unique ID for now
    difficulty,
    nonce: 0,
    timestamp: new Date().getTime(),
  };
  cbTx = {
    vin: [ { prevout: "COINBASE", n: null } ],
    vout: [ { scriptPubKey: myWallet.address, nValue: 50 * COIN } ]
  };
  tx = {
    vin: [{
      prevout: newBlock.txs[0].hash, n: 0, scriptSig: `${myWallet.publicKey} ${unlockTransaction(newBlock.txs[0].hash, myWallet.privateKey)}`,
    }],
    vout: [
      { scriptPubKey: friendWallet.address, nValue: 5 * COIN },
      { scriptPubKey: myWallet.address, nValue: 45 * COIN }
    ]
  };
  blk = new Block(header, [ cbTx, tx ], false);
  blk.findCorrectNonce();

  newBlock = new BlockModel(blk.getDBFormat());
  await newBlock.save();
  result.push(newBlock);
  console.log('> Block #2 saved: ', newBlock.hash);

  ///////////////////////////////////////////////////////
  //
  // create new block where friend gives 2 BTC to my address
  //
  ///////////////////////////////////////////////////////
  header = {
    version: 1,
    previousHash: newBlock.hash,
    merkleHash: uuid(), // we use a random unique ID for now
    difficulty,
    nonce: 0,
    timestamp: new Date().getTime(),
  };
  cbTx = {
    vin: [ { prevout: "COINBASE", n: null } ],
    vout: [ { scriptPubKey: myWallet.address, nValue: 50 * COIN } ]
  };
  tx = {
    vin: [{
      prevout: newBlock.txs[1].hash, n: 0, scriptSig: `${friendWallet.publicKey} ${unlockTransaction(newBlock.txs[1].hash, friendWallet.privateKey)}`,
    }],
    vout: [
      { scriptPubKey: myWallet.address, nValue: 2 * COIN },
      { scriptPubKey: friendWallet.address, nValue: 3 * COIN }
    ]
  };
  blk = new Block(header, [ cbTx, tx ], false);
  blk.findCorrectNonce();

  newBlock = new BlockModel(blk.getDBFormat());
  await newBlock.save();
  result.push(newBlock);
  console.log('> Block #3 saved: ', newBlock.hash);
  return result;
}
