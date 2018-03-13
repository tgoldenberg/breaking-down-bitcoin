(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["events"] = factory();
	else
		root["events"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var MY_ADDRESS = "1Nd85AnFYDtaQAG6vF9FVWXFWksG5HuA3M";
var FRIEND_ADDRESS = "1PDLNfJq5GAEn5StESZuBpaBe6B3134vmD";
var COIN = 100000000;

var BLOCKS = [
// Genesis block
{
  hash: "00000244a5bae572247ca9f5b9149fc3980fa90a7a70cd35030a29d81ebc88ea",
  version: 1,
  previousHash: "0000000000000000000000000000000000000000000000000000000000000000",
  timestamp: 1231006505000,
  difficulty: 22,
  nonce: 2620954,
  blocksize: 441,
  txs: [{
    hash: "892d3a0a01ab1a1c3d67e1592e5bd11df687e26098dda08478e6a58e0f6b337a",
    vin: [{ prevout: "COINBASE" }],
    vout: [{
      value: 50 * COIN,
      scriptPubKey: MY_ADDRESS
    }]
  }]
},
// Block #2 - new Coinbase and give 20 BTC to friend
{
  hash: "000001a20dacb2ede72eb4b35dea74b83fd4bc0b23849b789fee19c7eac2f1b9",
  version: 1,
  previousHash: "00000244a5bae572247ca9f5b9149fc3980fa90a7a70cd35030a29d81ebc88ea",
  timestamp: 1520947111852,
  difficulty: 22,
  nonce: 210212,
  blocksize: 225,
  txs: [{
    hash: "892d3a0a01ab1a1c3d67e1592e5bd11df687e26098dda08478e6a58e0f6b337a",
    vin: [{ prevout: "COINBASE" }],
    vout: [{
      value: 50 * COIN,
      scriptPubKey: MY_ADDRESS
    }]
  }, {
    hash: "522f5e10a101de1b8e2b2289b2f5801daf007221f01a7256a3c961c9d26412fc",
    vin: [{
      prevout: "892d3a0a01ab1a1c3d67e1592e5bd11df687e26098dda08478e6a58e0f6b337a",
      n: 0,
      scriptSig: "044283eb5f9aa7421f646f266fbf5f7a72b7229a7b90a088d1fe45292844557b1d80ed9ac96d5b3ff8286e7794e05c28f70ae671c7fecd634dd278eb0373e6a3ba 3046022100f744154f854952dedd6d673b1f15fcf028159651816e61f1df62955802c8356a022100ec920c0128d84166a802441d174acd665c84d571f7ff908ae1acb95e43a996dc"
    }],
    vout: [{
      value: 6 * COIN,
      scriptPubKey: FRIEND_ADDRESS
    }, {
      value: 44 * COIN,
      scriptPubKey: MY_ADDRESS
    }]
  }]
},
// Block #3 - new Coinbase and get 5 BTC from friend
{
  hash: "00000369dd0974cb0a472a961247607c196e6353c3ea04746b9bde3272b7de6a",
  previousHash: "000001a20dacb2ede72eb4b35dea74b83fd4bc0b23849b789fee19c7eac2f1b9",
  version: 1,
  timestamp: 1520948119344,
  difficulty: 22,
  nonce: 6317304,
  txs: [{
    hash: "892d3a0a01ab1a1c3d67e1592e5bd11df687e26098dda08478e6a58e0f6b337a",
    vin: [{ prevout: "COINBASE" }],
    vout: [{
      value: 50 * COIN,
      scriptPubKey: MY_ADDRESS
    }]
  }, {
    hash: "",
    vin: [{
      prevout: "522f5e10a101de1b8e2b2289b2f5801daf007221f01a7256a3c961c9d26412fc",
      n: 1,
      scriptSig: "304402201d66ed17c21543a2bed0d6f1a85b0929c6c2d5b024848471e5f72e95b9dbe95902202086c3ffa7e273f1cd4d6706f61960c8333a9700b0687dd2b1b7014bdb7c115a"
    }],
    vout: [{
      value: 10 * COIN,
      scriptPubKey: "1PDLNfJq5GAEn5StESZuBpaBe6B3134vmD"
    }, {
      value: 10 * COIN,
      scriptPubKey: "1Nd85AnFYDtaQAG6vF9FVWXFWksG5HuA3M"
    }]
  }]
}];

exports.default = BLOCKS;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("elliptic");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("ripemd160");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("js-sha256");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(5);

var _verifySignature = __webpack_require__(6);

var _blocks = __webpack_require__(0);

var _blocks2 = _interopRequireDefault(_blocks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var myWallet = {
  privateKey: '0fcb37c77f68a69b76cd5b160ac9c85877b4e8a09d8bcde2c778715c27f9a347',
  publicKey: '044283eb5f9aa7421f646f266fbf5f7a72b7229a7b90a088d1fe45292844557b1d80ed9ac96d5b3ff8286e7794e05c28f70ae671c7fecd634dd278eb0373e6a3ba',
  publicKeyHash: 'ed2f84f67943321bf73747936db3e7273ada7f6c',
  address: '1Nd85AnFYDtaQAG6vF9FVWXFWksG5HuA3M',
  privateKeyWIF: '5HwF1jU38V8YhpBy9PuNC4hTYkKrDccLE28qV7tLxZ7u3pKXCy4'
};

var vin = {
  txid: '522f5e10a101de1b8e2b2289b2f5801daf007221f01a7256a3c961c9d26412fc',
  prevout: {
    hash: '892d3a0a01ab1a1c3d67e1592e5bd11df687e26098dda08478e6a58e0f6b337a',
    n: 0,
    value: 5000000000,
    scriptPubKey: '1Nd85AnFYDtaQAG6vF9FVWXFWksG5HuA3M'
  },
  scriptSig: '044283eb5f9aa7421f646f266fbf5f7a72b7229a7b90a088d1fe45292844557b1d80ed9ac96d5b3ff8286e7794e05c28f70ae671c7fecd634dd278eb0373e6a3ba 3044022040f0ef15e90e017b9cc1b8a06e397cac73678a95ae85bc6919a60ff62249e96802206c6a9f09c137e3dbd36a13e126d549cbc3cb2ab4e0b48f9333183e5f38dcff59'
};

console.log((0, _verifySignature.testVerification)(vin));
console.log('\n\n\n');
console.log('> New signature: ', (0, _verifySignature.unlockTransaction)(vin.txid, myWallet.privateKey));

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.Hash = Hash;
exports.unlockTransaction = unlockTransaction;
exports.verifyUnlock = verifyUnlock;
exports.testVerification = testVerification;

var _blocks = __webpack_require__(0);

var _blocks2 = _interopRequireDefault(_blocks);

var _elliptic = __webpack_require__(1);

var _makeWallet = __webpack_require__(7);

var _ripemd = __webpack_require__(2);

var _ripemd2 = _interopRequireDefault(_ripemd);

var _jsSha = __webpack_require__(3);

var _jsSha2 = _interopRequireDefault(_jsSha);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ecdsa = new _elliptic.ec('secp256k1');
var COIN = 100000000;
var MY_ADDRESS = '1Nd85AnFYDtaQAG6vF9FVWXFWksG5HuA3M';
var FRIEND_ADDRESS = '1PDLNfJq5GAEn5StESZuBpaBe6B3134vmD';

// hash the txid with SHA-256 and RIPEMD-160 algorithms
function Hash(msg) {
  return new _ripemd2.default().update((0, _jsSha2.default)(msg)).digest('hex');
}

// sign a transaction input with private key
function unlockTransaction(txid, privateKey) {
  try {
    // hash transaction ID
    var hash = Hash(txid);
    // initialize signing keys
    var keys = ecdsa.keyFromPrivate(privateKey);
    // sign txid hash with signing keys
    var signature = ecdsa.sign(hash, keys);
    // return in hexadecimal format
    return signature.toDER('hex');
  } catch (e) {
    return null;
  }
}

// verify that signature is owner of address and matches transaction
function verifyUnlock(txid, address, publicKey, signature) {
  try {
    // first validate that address is derived from public key
    var isAddress = (0, _makeWallet.getAddress)(publicKey) === address;
    if (!isAddress) {
      return false;
    }
    var hash = Hash(txid);
    var keys = ecdsa.keyFromPublic(publicKey, 'hex');
    var isValid = keys.verify(hash, signature);
    return isValid;
  } catch (e) {
    return false;
  }
}

function testVerification(vin) {
  console.log('> Testing digital signature....');
  var txid = vin.txid,
      prevout = vin.prevout,
      scriptSig = vin.scriptSig;

  var _scriptSig$split = scriptSig.split(' '),
      _scriptSig$split2 = _slicedToArray(_scriptSig$split, 2),
      publicKey = _scriptSig$split2[0],
      signature = _scriptSig$split2[1];

  console.log('> Public key: ', publicKey);
  console.log('> Signature: ', signature);
  return verifyUnlock(txid, prevout.scriptPubKey, publicKey, signature);
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hash = Hash;
exports.getAddress = getAddress;
exports.makeWallet = makeWallet;

var _coinstring = __webpack_require__(8);

var _coinstring2 = _interopRequireDefault(_coinstring);

var _crypto = __webpack_require__(9);

var _crypto2 = _interopRequireDefault(_crypto);

var _elliptic = __webpack_require__(1);

var _ripemd = __webpack_require__(2);

var _ripemd2 = _interopRequireDefault(_ripemd);

var _secureRandom = __webpack_require__(10);

var _secureRandom2 = _interopRequireDefault(_secureRandom);

var _jsSha = __webpack_require__(3);

var _jsSha2 = _interopRequireDefault(_jsSha);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ecdsa = new _elliptic.ec('secp256k1');
var DEFAULT_VERSION = { public: 0x0, private: 0x80 };

// hash with both SHA-256 and RIPEMD-160 algorithms
function Hash(msg) {
  var hash = _crypto2.default.createHash('sha256').update(msg).digest();
  return new _ripemd2.default().update(hash).digest();
}

// get a base58 encoded BTC address given a user's public key
function getAddress(publicKey) {
  var publicKeyHash = Hash(publicKey);
  return _coinstring2.default.encode(publicKeyHash, DEFAULT_VERSION.public);
}

function makeWallet() {
  var privateKey = _secureRandom2.default.randomBuffer(32); // 32 byte random number
  console.log('> Private key created: ', privateKey.toString('hex')); // convert to hexadecimal

  // generate public key from private
  var keys = ecdsa.keyFromPrivate(privateKey);
  var publicKey = keys.getPublic('hex');
  console.log('> Public key created: ', publicKey);

  // generate public key hash
  var publicKeyHash = Hash(publicKey);
  console.log('> Public key hash created: ', publicKeyHash.toString('hex'));

  // generate public address
  var publicAddress = _coinstring2.default.encode(publicKeyHash, DEFAULT_VERSION.public);
  console.log('> Public address created: ', publicAddress);

  // generate private key WIF (wallet import format)
  var privateKeyWIF = _coinstring2.default.encode(privateKey, DEFAULT_VERSION.private);
  console.log('> Private key WIF (wallet import format) created : ', privateKeyWIF);

  var wallet = {
    privateKey: privateKey.toString('hex'),
    publicKey: publicKey,
    publicKeyHash: publicKeyHash.toString('hex'),
    privateKeyWIF: privateKeyWIF,
    publicAddress: publicAddress
  };
  return wallet;
}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("coinstring");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("secure-random");

/***/ })
/******/ ]);
});
//# sourceMappingURL=nodecoin.js.map