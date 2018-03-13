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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _makeWallet = __webpack_require__(2);

(0, _makeWallet.makeWallet)();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hash = Hash;
exports.getAddress = getAddress;
exports.makeWallet = makeWallet;

var _coinstring = __webpack_require__(3);

var _coinstring2 = _interopRequireDefault(_coinstring);

var _crypto = __webpack_require__(4);

var _crypto2 = _interopRequireDefault(_crypto);

var _elliptic = __webpack_require__(5);

var _ripemd = __webpack_require__(6);

var _ripemd2 = _interopRequireDefault(_ripemd);

var _secureRandom = __webpack_require__(7);

var _secureRandom2 = _interopRequireDefault(_secureRandom);

var _jsSha = __webpack_require__(8);

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
/* 3 */
/***/ (function(module, exports) {

module.exports = require("coinstring");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("elliptic");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("ripemd160");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("secure-random");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("js-sha256");

/***/ })
/******/ ]);
});
//# sourceMappingURL=nodecoin.js.map