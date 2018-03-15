import blocks from '__mocks__/blocks';
import { ec } from 'elliptic';
import { getAddress } from 'utils/makeWallet';
import ripemd160 from 'ripemd160';
import sha256 from 'js-sha256';

const ecdsa = new ec('secp256k1');
const COIN = 100000000;
const MY_ADDRESS = '1Nd85AnFYDtaQAG6vF9FVWXFWksG5HuA3M';
const FRIEND_ADDRESS = '1PDLNfJq5GAEn5StESZuBpaBe6B3134vmD';

// hash the txid with SHA-256 and RIPEMD-160 algorithms
export function Hash(msg) {
  return new ripemd160().update(sha256(msg)).digest('hex');
}

// sign a transaction input with private key
export function unlockTransaction(txid, privateKey) {
  try {
    // hash transaction ID
    const hash = Hash(txid);
    // initialize signing keys
    const keys = ecdsa.keyFromPrivate(privateKey);
    // sign txid hash with signing keys
    const signature = ecdsa.sign(hash, keys);
    // return in hexadecimal format
    return signature.toDER('hex');
  } catch (e) {
    return null;
  }
}

// verify that signature is owner of address and matches transaction
export function verifyUnlock(txid, address, publicKey, signature) {
  try {
    // first validate that address is derived from public key
    const isAddress = getAddress(publicKey) === address;
    if (!isAddress) {
      return false;
    }
    const hash = Hash(txid);
    const keys = ecdsa.keyFromPublic(publicKey, 'hex');
    const isValid = keys.verify(hash, signature);
    return isValid;
  } catch (e) {
    return false;
  }
}

export function testVerification(vin) {
  console.log('> Testing digital signature....');
  const { txid, prevout, scriptSig } = vin;
  const [ publicKey, signature ] = scriptSig.split(' ');
  console.log('> Public key: ', publicKey);
  console.log('> Signature: ', signature);
  return verifyUnlock(txid, prevout.scriptPubKey, publicKey, signature);
}

// let pk = '0fcb37c77f68a69b76cd5b160ac9c85877b4e8a09d8bcde2c778715c27f9a347';
// console.log(unlockTransaction('a13ecf8dc0587df60bcbd7338ae9d7c6251705627df3f4d17e1fa0a4f647f6db', pk));
