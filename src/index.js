import 'babel-polyfill';

import { testVerification, unlockTransaction } from 'utils/verifySignature';

import blocks from '__mocks__/blocks';

const myWallet = {
  privateKey      : '0fcb37c77f68a69b76cd5b160ac9c85877b4e8a09d8bcde2c778715c27f9a347',
  publicKey       : '044283eb5f9aa7421f646f266fbf5f7a72b7229a7b90a088d1fe45292844557b1d80ed9ac96d5b3ff8286e7794e05c28f70ae671c7fecd634dd278eb0373e6a3ba',
  publicKeyHash   : 'ed2f84f67943321bf73747936db3e7273ada7f6c',
  address         : '1Nd85AnFYDtaQAG6vF9FVWXFWksG5HuA3M',
  privateKeyWIF   : '5HwF1jU38V8YhpBy9PuNC4hTYkKrDccLE28qV7tLxZ7u3pKXCy4',
};

const vin = {
  txid: '522f5e10a101de1b8e2b2289b2f5801daf007221f01a7256a3c961c9d26412fc',
  prevout: {
    hash: '892d3a0a01ab1a1c3d67e1592e5bd11df687e26098dda08478e6a58e0f6b337a',
    n: 0,
    value: 5000000000,
    scriptPubKey: '1Nd85AnFYDtaQAG6vF9FVWXFWksG5HuA3M',
  },
  scriptSig: '044283eb5f9aa7421f646f266fbf5f7a72b7229a7b90a088d1fe45292844557b1d80ed9ac96d5b3ff8286e7794e05c28f70ae671c7fecd634dd278eb0373e6a3ba 3044022040f0ef15e90e017b9cc1b8a06e397cac73678a95ae85bc6919a60ff62249e96802206c6a9f09c137e3dbd36a13e126d549cbc3cb2ab4e0b48f9333183e5f38dcff59',
};

console.log(testVerification(vin));
console.log('\n\n\n');
console.log('> New signature: ', unlockTransaction(vin.txid, myWallet.privateKey));
