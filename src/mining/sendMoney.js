import SHA256 from 'js-sha256';
import { getAddress } from 'utils/makeWallet';
import { unlockTransaction } from 'utils/verifySignature';

const COIN = 100000000;

export async function getWalletData(address) {
  return { utxo: [ ], balance: 0 };
}

// curl -XPOST localhost:3000/send -d publicKey=044283eb5f9aa7421f646f266fbf5f7a72b7229a7b90a088d1fe45292844557b1d80ed9ac96d5b3ff8286e7794e05c28f70ae671c7fecd634dd278eb0373e6a3ba -d amount=10 -d privateKey=0fcb37c77f68a69b76cd5b160ac9c85877b4e8a09d8bcde2c778715c27f9a347 -d toAddress=0482a39675cdc06766af5192a551b703c5090fc67f6e403dfdb42b60d34f5e3539ad44de9197e7ac09d1db5a60f79552ce5c7984a3fc4643fb1911f3857d6dd34c | python -m json.tool
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
  let transaction = { hash: SHA256(JSON.stringify({ vin, vout })), vin, vout };
  // broadcast to network
  let url = 'https://pusher-presence-auth.herokuapp.com/transactions/new'; // can be http://localhost:3001/transactions/new if server running locally
  let body = { tx: transaction, timestamp: new Date().getTime() };
  let response = await request.post(url, body);
  console.log('> Send transaction response: ', response.data);
  res.status(200).send(response.data);
}
