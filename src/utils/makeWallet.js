import base58 from 'bs58';
// import base58 from 'base58check';
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
  let hash = sha256(Buffer.from(msg, 'hex'));
  return new ripemd160().update(Buffer.from(hash, 'hex')).digest();
}

// get a base58 encoded BTC address given a user's public key
export function getAddress(publicKey) {
  const publicKeyHash = Hash(publicKey);
  return coinstring.encode(publicKeyHash, DEFAULT_VERSION.public);
}

function createPrivateKeyWIF(privateKey) {
  const step1 = Buffer.from("80" + privateKey, 'hex');
  const step2 = sha256(step1);
  const step3 = sha256(Buffer.from(step2, 'hex'));
  const checksum = step3.substring(0,8);
  const step4 = step1.toString('hex') + checksum;
  const privateKeyWIF = base58.encode(Buffer.from(step4, 'hex'));
  return privateKeyWIF;
}

function createPublicAddress(publicKeyHash) {
  const step1 = Buffer.from("00" + publicKeyHash, 'hex');
  const step2 = sha256(step1);
  const step3 = sha256(Buffer.from(step2, 'hex'));
  const checksum = step3.substring(0,8);
  const step4 = step1.toString('hex') + checksum;
  const address = base58.encode(Buffer.from(step4, 'hex'));
  return address;
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
  // const publicAddress = base58.encode(publicKeyHash);
  const publicAddress = createPublicAddress(publicKeyHash.toString('hex'));
  console.log('> Public address created: ', publicAddress);

  // generate private key WIF (wallet import format)
  // const privateKeyWIF = coinstring.encode(privateKey, DEFAULT_VERSION.private);
  const privateKeyWIF = createPrivateKeyWIF(privateKey.toString('hex'));
  console.log('> Private key WIF (wallet import format) created : ', privateKeyWIF);

  const wallet = {
    privateKey: privateKey.toString('hex'),
    publicKey,
    publicKeyHash: publicKeyHash.toString('hex'),
    privateKeyWIF,
    publicAddress,
  };
  return wallet;
}
