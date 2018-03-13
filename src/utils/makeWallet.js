import coinstring from 'coinstring';
import crypto from 'crypto';
import { ec } from 'elliptic';
import ripemd160 from 'ripemd160';
import secureRandom from 'secure-random';
import sha256 from 'js-sha256';

const ecdsa = new ec('secp256k1');
const DEFAULT_VERSION = { public: 0x0, private: 0x80 };

// hash with both SHA-256 and RIPEMD-160 algorithms
export function Hash(msg) {
  let hash = crypto.createHash('sha256').update(msg).digest();
  return new ripemd160().update(hash).digest();
}

// get a base58 encoded BTC address given a user's public key
export function getAddress(publicKey) {
  const publicKeyHash = Hash(publicKey);
  return coinstring.encode(publicKeyHash, DEFAULT_VERSION.public);
}


export function makeWallet() {
  const privateKey = secureRandom.randomBuffer(32); // 32 byte random number
  console.log('> Private key created: ', privateKey.toString('hex')); // convert to hexadecimal

  // generate public key from private
  const keys = ecdsa.keyFromPrivate(privateKey);
  const publicKey = keys.getPublic('hex');
  console.log('> Public key created: ', publicKey);

  // generate public key hash
  const publicKeyHash = Hash(publicKey);
  console.log('> Public key hash created: ', publicKeyHash.toString('hex'));

  // generate public address
  const publicAddress = coinstring.encode(publicKeyHash, DEFAULT_VERSION.public);
  console.log('> Public address created: ', publicAddress);

  // generate private key WIF (wallet import format)
  const privateKeyWIF = coinstring.encode(privateKey, DEFAULT_VERSION.private);
  console.log('> Private key WIF (wallet import format) created : ', privateKeyWIF);

  const wallet = {
    privateKey: privateKey.toString('hex'),
    publicKey,
    publicKeyHash: publicKeyHash.toString('hex'),
    privateKeyWIF,
    publicAddress
  };
  return wallet;
}
