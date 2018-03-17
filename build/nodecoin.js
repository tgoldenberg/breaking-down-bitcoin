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
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(30);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(66),
    getValue = __webpack_require__(71);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(8),
    getRawTag = __webpack_require__(67),
    objectToString = __webpack_require__(68);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(22);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = __webpack_require__(50);

var schema = {
  hash: { type: String, required: true },
  version: { type: Number, default: 1, required: true },
  previousHash: { type: String, required: true },
  merkleHash: { type: String, required: true },
  timestamp: { type: Number, required: true, default: new Date().getTime() },
  difficulty: { type: Number, required: true, default: 22 },
  nonce: { type: Number, required: true },
  txs: { type: Array, default: [] },
  blocksize: { type: Number, required: true }
};

var BlockSchema = new _mongoose2.default.Schema(schema);

var BlockModel = _mongoose2.default.model('blocks', BlockSchema);

exports.default = BlockModel;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(56),
    listCacheDelete = __webpack_require__(57),
    listCacheGet = __webpack_require__(58),
    listCacheHas = __webpack_require__(59),
    listCacheSet = __webpack_require__(60);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(28);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(0);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(2);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(80);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(3),
    isObjectLike = __webpack_require__(4);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(12);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("js-sha256");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(2),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(72),
    mapCacheDelete = __webpack_require__(79),
    mapCacheGet = __webpack_require__(81),
    mapCacheHas = __webpack_require__(82),
    mapCacheSet = __webpack_require__(83);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(101),
    baseKeys = __webpack_require__(108),
    isArrayLike = __webpack_require__(39);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(1),
    isSymbol = __webpack_require__(12);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 20 */
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

var _blocks = __webpack_require__(137);

var _blocks2 = _interopRequireDefault(_blocks);

var _elliptic = __webpack_require__(45);

var _makeWallet = __webpack_require__(138);

var _ripemd = __webpack_require__(46);

var _ripemd2 = _interopRequireDefault(_ripemd);

var _jsSha = __webpack_require__(14);

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

// let pk = '0fcb37c77f68a69b76cd5b160ac9c85877b4e8a09d8bcde2c778715c27f9a347';
// console.log(unlockTransaction('a13ecf8dc0587df60bcbd7338ae9d7c6251705627df3f4d17e1fa0a4f647f6db', pk));

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTxValid = exports.isBlockValid = exports.areBlocksValid = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var areBlocksValid = exports.areBlocksValid = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(blocks) {
    var i, isValidBlk;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            i = 1;

          case 1:
            if (!(i < blocks.length)) {
              _context.next = 10;
              break;
            }

            _context.next = 4;
            return isBlockValid(blocks[i], blocks[i - 1]);

          case 4:
            isValidBlk = _context.sent;

            if (isValidBlk) {
              _context.next = 7;
              break;
            }

            return _context.abrupt('return', false);

          case 7:
            i++;
            _context.next = 1;
            break;

          case 10:
            return _context.abrupt('return', true);

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function areBlocksValid(_x) {
    return _ref.apply(this, arguments);
  };
}();

var isBlockValid = exports.isBlockValid = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(block, prevBlock) {
    var txs, i, isValidTx, target;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // check transactions
            txs = block.txs;
            // check that "previousHash" is correct

            if (!(block.previousHash !== prevBlock.hash)) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt('return', false);

          case 3:
            i = 0;

          case 4:
            if (!(i < txs.length)) {
              _context2.next = 13;
              break;
            }

            _context2.next = 7;
            return isTxValid(txs[i]);

          case 7:
            isValidTx = _context2.sent;

            if (isValidTx) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt('return', false);

          case 10:
            i++;
            _context2.next = 4;
            break;

          case 13:
            // check nonce
            target = Math.pow(2, 256 - block.difficulty);

            if (!(parseInt(block.hash, 16) > target)) {
              _context2.next = 16;
              break;
            }

            return _context2.abrupt('return', false);

          case 16:
            return _context2.abrupt('return', true);

          case 17:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function isBlockValid(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

var isTxValid = exports.isTxValid = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(tx) {
    var _this = this;

    var isCoinbase, txinValue, txoutValue, _loop, i, _ret;

    return regeneratorRuntime.wrap(function _callee3$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (!(!tx.vin || !tx.vin.length || !tx.vout || !tx.vout.length)) {
              _context4.next = 2;
              break;
            }

            return _context4.abrupt('return', false);

          case 2:
            isCoinbase = false;
            txinValue = 0;
            txoutValue = 0;
            // check inputs

            _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop(i) {
              var txin, prevTxBlock, prevTx, alreadySpentTxs, publicKeyScript, txid, _txin$scriptSig$split, _txin$scriptSig$split2, publicKey, scriptSig, isVerified, _i, txout, totalFees;

              return regeneratorRuntime.wrap(function _loop$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      txin = tx.vin[i];

                      if (!(txin.prevout === 'COINBASE')) {
                        _context3.next = 5;
                        break;
                      }

                      if (!(tx.vout.length > 1 || tx.vin.length > 1 || tx.vout[i].nValue > COINBASE_REWARD)) {
                        _context3.next = 4;
                        break;
                      }

                      return _context3.abrupt('return', {
                        v: false
                      });

                    case 4:
                      return _context3.abrupt('return', {
                        v: true
                      });

                    case 5:
                      if (!(!txin.prevout || !txin.scriptSig || typeof txin.n != 'number')) {
                        _context3.next = 7;
                        break;
                      }

                      return _context3.abrupt('return', {
                        v: false
                      });

                    case 7:
                      _context3.next = 9;
                      return _Block4.default.findOne({ 'txs.hash': txin.prevout });

                    case 9:
                      prevTxBlock = _context3.sent;

                      if (prevTxBlock) {
                        _context3.next = 12;
                        break;
                      }

                      return _context3.abrupt('return', {
                        v: false
                      });

                    case 12:
                      prevTx = (0, _find2.default)(prevTxBlock.txs, function (_ref4) {
                        var hash = _ref4.hash;
                        return hash === txin.prevout;
                      });

                      if (prevTx) {
                        _context3.next = 15;
                        break;
                      }

                      return _context3.abrupt('return', {
                        v: false
                      });

                    case 15:
                      txinValue += prevTx.vout[txin.n].nValue;
                      // ensure that prevout is UXTO - prevent double spending
                      _context3.next = 18;
                      return _Block4.default.find({ "txs.vin.prevout": txin.prevout });

                    case 18:
                      alreadySpentTxs = _context3.sent;

                      if (!(alreadySpentTxs.length > 1)) {
                        _context3.next = 21;
                        break;
                      }

                      return _context3.abrupt('return', {
                        v: false
                      });

                    case 21:
                      // verify signature
                      publicKeyScript = prevTx.vout[txin.n].scriptPubKey;
                      txid = prevTx.hash;
                      _txin$scriptSig$split = txin.scriptSig.split(' '), _txin$scriptSig$split2 = _slicedToArray(_txin$scriptSig$split, 2), publicKey = _txin$scriptSig$split2[0], scriptSig = _txin$scriptSig$split2[1];
                      isVerified = (0, _verifySignature.verifyUnlock)(txid, prevTx.vout[txin.n].scriptPubKey, publicKey, scriptSig);

                      if (isVerified) {
                        _context3.next = 27;
                        break;
                      }

                      return _context3.abrupt('return', {
                        v: false
                      });

                    case 27:
                      _i = 0;

                    case 28:
                      if (!(_i < tx.vout.length)) {
                        _context3.next = 36;
                        break;
                      }

                      txout = tx.vout[_i];

                      if (!(typeof txout.nValue != 'number' || typeof txout.scriptPubKey != 'string')) {
                        _context3.next = 32;
                        break;
                      }

                      return _context3.abrupt('return', {
                        v: false
                      });

                    case 32:
                      txoutValue += txout.nValue;

                    case 33:
                      _i++;
                      _context3.next = 28;
                      break;

                    case 36:
                      // check that inputs are not less than outputs
                      totalFees = txinValue - txoutValue;

                      if (!(totalFees < 0)) {
                        _context3.next = 39;
                        break;
                      }

                      return _context3.abrupt('return', {
                        v: false
                      });

                    case 39:
                      return _context3.abrupt('return', {
                        v: true
                      });

                    case 40:
                    case 'end':
                      return _context3.stop();
                  }
                }
              }, _loop, _this);
            });
            i = 0;

          case 7:
            if (!(i < tx.vin.length)) {
              _context4.next = 15;
              break;
            }

            return _context4.delegateYield(_loop(i), 't0', 9);

          case 9:
            _ret = _context4.t0;

            if (!((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object")) {
              _context4.next = 12;
              break;
            }

            return _context4.abrupt('return', _ret.v);

          case 12:
            i++;
            _context4.next = 7;
            break;

          case 15:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee3, this);
  }));

  return function isTxValid(_x4) {
    return _ref3.apply(this, arguments);
  };
}();

var _Block = __webpack_require__(24);

var _Block2 = _interopRequireDefault(_Block);

var _Block3 = __webpack_require__(5);

var _Block4 = _interopRequireDefault(_Block3);

var _find = __webpack_require__(25);

var _find2 = _interopRequireDefault(_find);

var _verifySignature = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var COIN = 100000000;
var COINBASE_REWARD = 50 * COIN;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsSha = __webpack_require__(14);

var _jsSha2 = _interopRequireDefault(_jsSha);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var COIN = 100000000;
var MY_ADDRESS = '1Nd85AnFYDtaQAG6vF9FVWXFWksG5HuA3M';

var GENESIS_HEADER = {
  version: 1,
  previousHash: '0000000000000000000000000000000000000000000000000000000000000000',
  merkleHash: '4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b',
  difficulty: 22,
  nonce: 2620954,
  timestamp: 1231006505000
};

function genesisTx(publicKey) {
  return {
    vin: [{ prevout: "COINBASE", n: null }],
    vout: [{ scriptPubKey: publicKey, nValue: 50 * COIN }]
  };
}

var Block = function () {
  function Block(header, txs) {
    var isGenesis = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, Block);

    this.header = isGenesis ? GENESIS_HEADER : header;
    this.hash = this.getBlockHash(this.header, this.header.nonce);
    txs = isGenesis ? [genesisTx(MY_ADDRESS)] : txs;
    this.txs = [];
    for (var i = 0; i < txs.length; i++) {
      this.addTransaction(txs[i]);
    }
    this.blocksize = this.getBlocksize();
  }

  _createClass(Block, [{
    key: 'getBlockHash',
    value: function getBlockHash(header, nonce) {
      return (0, _jsSha2.default)('' + header.version + header.previousHash + header.merkleHash + header.timestamp + header.difficulty + nonce);
    }
  }, {
    key: 'getDBFormat',
    value: function getDBFormat() {
      return {
        hash: this.hash,
        version: this.header.version,
        previousHash: this.header.previousHash,
        merkleHash: this.header.merkleHash,
        timestamp: this.header.timestamp,
        difficulty: this.header.difficulty,
        nonce: this.header.nonce,
        txs: this.txs,
        blocksize: this.blocksize
      };
    }
  }, {
    key: 'addTransaction',
    value: function addTransaction(tx) {
      var txid = (0, _jsSha2.default)(this.hash + (0, _jsSha2.default)(JSON.stringify(tx)));
      this.txs.push(_extends({}, tx, { hash: txid }));
      return this.txs;
    }
  }, {
    key: 'setNonce',
    value: function setNonce(nonce) {
      this.header.nonce = nonce;
      this.hash = this.getBlockHash(this.header, nonce);
    }
  }, {
    key: 'setHeader',
    value: function setHeader(header) {
      this.header = header;
      this.hash = this.getBlockHash(header, header.nonce);
      this.adjustTxids();
      return this.header;
    }
  }, {
    key: 'getBlocksize',
    value: function getBlocksize() {
      return JSON.stringify(this).length;
    }
  }, {
    key: 'adjustTxids',
    value: function adjustTxids() {
      var newTxs = [];
      for (var i = 0; i < this.txs.length; i++) {
        var tx = this.txs[i];
        var txid = (0, _jsSha2.default)(this.hash + (0, _jsSha2.default)(JSON.stringify({ vin: tx.vin, vout: tx.vout })));
        newTxs.push(_extends({}, tx, { hash: txid }));
      }
      this.txs = newTxs;
    }
  }, {
    key: 'findCorrectNonce',
    value: function findCorrectNonce() {
      // find correct nonce
      var target = Math.pow(2, 256 - this.header.difficulty);
      var nonce = this.header.nonce;

      console.log('> Solving for block nonce...');
      while (parseInt(this.getBlockHash(this.header, nonce), 16) > target) {
        this.setNonce(++nonce);
      }
      this.adjustTxids();
      return this.header.nonce;
    }
  }]);

  return Block;
}();

exports.default = Block;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var createFind = __webpack_require__(53),
    findIndex = __webpack_require__(44);

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

module.exports = find;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(54),
    baseMatchesProperty = __webpack_require__(118),
    identity = __webpack_require__(129),
    isArray = __webpack_require__(1),
    property = __webpack_require__(130);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(6),
    stackClear = __webpack_require__(61),
    stackDelete = __webpack_require__(62),
    stackGet = __webpack_require__(63),
    stackHas = __webpack_require__(64),
    stackSet = __webpack_require__(65);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(3),
    isObject = __webpack_require__(9);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(84),
    isObjectLike = __webpack_require__(4);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(85),
    arraySome = __webpack_require__(88),
    cacheHas = __webpack_require__(89);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(103),
    isObjectLike = __webpack_require__(4);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(0),
    stubFalse = __webpack_require__(104);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(36)(module)))

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(105),
    baseUnary = __webpack_require__(106),
    nodeUtil = __webpack_require__(107);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(29),
    isLength = __webpack_require__(18);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),
/* 41 */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(43),
    toKey = __webpack_require__(13);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(1),
    isKey = __webpack_require__(19),
    stringToPath = __webpack_require__(120),
    toString = __webpack_require__(123);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(133),
    baseIteratee = __webpack_require__(26),
    toInteger = __webpack_require__(134);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("elliptic");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("ripemd160");

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = __webpack_require__(145);

var _findIndex = __webpack_require__(44);

var _findIndex2 = _interopRequireDefault(_findIndex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {

  // Initialization
  dbLoaded: false,
  lastBlock: null,
  numBlocks: 0,
  allPeers: [], // list of { ip: String, port: Number }
  version: 1,
  difficulty: 0,

  // Mempool
  memoryPool: [], // list of valid transactions (txs)
  pendingBlockTxs: [],
  unfetchedHeaders: new Set(),
  loadingHeaders: new Set(),
  orphanTransactions: new Set(),

  // Mining
  isMining: false
};

var newUnfetchedHeaders = void 0,
    newLoadingHeaders = void 0,
    peerIdx = void 0,
    newMemoryPool = void 0,
    tempMempool = void 0;

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case 'SET_INITIAL_BLOCKS':
      return _extends({}, state, {
        dbLoaded: true,
        lastBlock: action.blocks[action.blocks.length - 1],
        numBlocks: action.blocks.length
      });
    case 'ADD_BLOCK':
      return _extends({}, state, {
        lastBlock: action.block,
        numBlocks: state.numBlocks + 1
      });
    case 'SET_DIFFICULTY':
      return _extends({}, state, { difficulty: action.difficulty });
    case 'SET_PEERS':
      return _extends({}, state, { allPeers: action.allPeers });
    case 'CONNECT_PEER':
      peerIdx = (0, _findIndex2.default)(state.allPeers, function (_ref) {
        var ip = _ref.ip;
        return ip === action.ip;
      });
      return _extends({}, state, {
        allPeers: peerIdx === -1 ? state.allPeers : [].concat(_toConsumableArray(state.allPeers.slice(0, peerIdx)), [{ ip: action.ip, client: action.client, synced: false, connected: true }], _toConsumableArray(state.allPeers.slice(peerIdx + 1)))
      });
    case 'ADD_UNFETCHED_HEADERS':
      return _extends({}, state, {
        unfetchedHeaders: new Set([].concat(_toConsumableArray(Array.from(state.unfetchedHeaders)), _toConsumableArray(action.headers)))
      });
    case 'LOADING_BLOCK':
      newUnfetchedHeaders = state.unfetchedHeaders;
      newUnfetchedHeaders.delete(action.header);
      newLoadingHeaders = state.loadingHeaders;
      newLoadingHeaders.add(action.header);
      return _extends({}, state, {
        unfetchedHeaders: newUnfetchedHeaders,
        loadingHeaders: newLoadingHeaders
      });
    case 'NEW_BLOCK':
      newUnfetchedHeaders = state.unfetchedHeaders;
      newUnfetchedHeaders.delete(action.header);
      newLoadingHeaders = state.loadingHeaders;
      newLoadingHeaders.delete(action.header);
      return _extends({}, state, {
        lastBlock: action.block,
        numBlocks: state.numBlocks + 1,
        unfetchedHeaders: newUnfetchedHeaders,
        loadingHeaders: newLoadingHeaders
      });
    case 'SYNC_PEER':
      peerIdx = (0, _findIndex2.default)(state.allPeers, function (_ref2) {
        var ip = _ref2.ip;
        return ip === action.ip;
      });
      return _extends({}, state, {
        allPeers: peerIdx === -1 ? state.allPeers : [].concat(_toConsumableArray(state.allPeers.slice(0, peerIdx)), [_extends({}, state.allPeers[peerIdx], { synced: true, connected: true })], _toConsumableArray(state.allPeers.slice(peerIdx + 1)))
      });
    case 'NEW_TX':
      return _extends({}, state, { memoryPool: [].concat(_toConsumableArray(state.memoryPool), [action.tx]) });
    case 'START_MINING':
      return _extends({}, state, { isMining: true });
    case 'STOP_MINING':
      tempMempool = state.memoryPool;
      return _extends({}, state, { isMining: false, memoryPool: [], pendingBlockTxs: tempMempool });
    default:
      return state;
  }
};

var store = (0, _redux.createStore)(reducer);

store.dispatch = addLoggingToDispatch(store);

function addLoggingToDispatch(store) {
  var rawDispatch = store.dispatch;
  return function (action) {
    console.log('> Action: ' + action.type + ', (Keys:  ' + Object.keys(action).join(', ') + ')');
    var returnValue = rawDispatch(action);
    return returnValue;
  };
}

exports.default = store;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(21);

__webpack_require__(49);

var _Block = __webpack_require__(5);

var _Block2 = _interopRequireDefault(_Block);

var _express = __webpack_require__(51);

var _express2 = _interopRequireDefault(_express);

var _pusherJs = __webpack_require__(52);

var _pusherJs2 = _interopRequireDefault(_pusherJs);

var _validateBlock = __webpack_require__(23);

var _bodyParser = __webpack_require__(142);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _connectToDB = __webpack_require__(143);

var _find = __webpack_require__(25);

var _find2 = _interopRequireDefault(_find);

var _handleData = __webpack_require__(144);

var _net = __webpack_require__(147);

var _net2 = _interopRequireDefault(_net);

var _network = __webpack_require__(148);

var _network2 = _interopRequireDefault(_network);

var _seedBlocks = __webpack_require__(149);

var _sendMoney = __webpack_require__(151);

var _store = __webpack_require__(47);

var _store2 = _interopRequireDefault(_store);

var _verifySignature = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// variables for Pusher network
var PUSHER_APP_KEY = '86e36fb6cb404d67a108'; // connect via public key
var MAX_PEERS = 25;
var DL = '~~~~~~';

// initialize app server
var app = (0, _express2.default)();
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

app.listen(process.env.PORT || 3000, _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
  var _this = this;

  var connectedToDB, savedBlocks, valid, ipAddr, pusher, channel, tcpServer;
  return regeneratorRuntime.wrap(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          console.log('> App server listening on port ', process.env.PORT);
          // connect with db
          _context4.next = 3;
          return (0, _connectToDB.connectToDB)();

        case 3:
          connectedToDB = _context4.sent;

          if (!(process.env.SEED === 'true')) {
            _context4.next = 7;
            break;
          }

          _context4.next = 7;
          return (0, _seedBlocks.seedBlocks)();

        case 7:
          _context4.next = 9;
          return _Block2.default.find({});

        case 9:
          savedBlocks = _context4.sent;

          console.log('> Saved blocks: ', savedBlocks.length);
          // validate blocks
          _context4.next = 13;
          return (0, _validateBlock.areBlocksValid)(savedBlocks);

        case 13:
          valid = _context4.sent;

          if (!(!valid || !savedBlocks.length)) {
            _context4.next = 18;
            break;
          }

          _context4.next = 17;
          return (0, _seedBlocks.seedBlocks)(true);

        case 17:
          savedBlocks = _context4.sent;

        case 18:

          _store2.default.dispatch({ type: 'SET_INITIAL_BLOCKS', blocks: savedBlocks });

          // get public facing IP address
          _context4.next = 21;
          return getIPAddress();

        case 21:
          ipAddr = _context4.sent;

          // connect to pool of nodes via Pusher
          pusher = new _pusherJs2.default(PUSHER_APP_KEY, {
            auth: { params: { ip_addr: ipAddr, port: 8334 } },
            cluster: 'us2',
            authEndpoint: 'https://pusher-presence-auth.herokuapp.com/pusher/auth', // this can be changed to localhost
            encrypted: true
          });

          // subscribe to channel with other nodes

          channel = pusher.subscribe('presence-node-coin');
          // once our node is connected we can access all of the members

          channel.bind('pusher:subscription_succeeded', function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(members) {
              var peers, i;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log('> pusher:subscription_succeeded: ', members);
                      peers = [];

                      channel.members.each(function (_ref3) {
                        var id = _ref3.id;

                        if (id !== ipAddr) {
                          peers.push({ ip: id, port: 8334, connected: false, client: null, synced: false });
                        }
                      });
                      _store2.default.dispatch({ type: 'SET_PEERS', allPeers: peers.slice(0, MAX_PEERS) });
                      // only connect to a max of 25 nodes
                      i = 0;

                    case 5:
                      if (!(i < Math.min(MAX_PEERS, peers.length))) {
                        _context.next = 11;
                        break;
                      }

                      _context.next = 8;
                      return connectWithPeer(peers[i].ip, 8334);

                    case 8:
                      i++;
                      _context.next = 5;
                      break;

                    case 11:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, _callee, _this);
            }));

            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }());

          // MEMBER REMOVED
          channel.bind('pusher:member_removed', function (member) {
            console.log('> pusher:member_removed: ', member);
            var allPeers = _store2.default.getState().allPeers;
            var newAllPeers = [];
            allPeers.forEach(function (peer) {
              if (peer.ip !== member.id) {
                newAllPeers.push(peer);
              }
            });
            _store2.default.dispatch({ type: 'SET_PEERS', allPeers: newAllPeers });
          });

          // MEMBER ADDED
          channel.bind('pusher:member_added', function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(member) {
              var _this2 = this;

              var allPeers;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      console.log('> pusher:member_added: ', member);
                      allPeers = _store2.default.getState().allPeers;

                      allPeers.push({ ip: member.id, connected: false, client: null, synced: false });
                      _store2.default.dispatch({ type: 'SET_PEERS', allPeers: allPeers });
                      // wait 30 seconds before initiating connection
                      setTimeout(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                        var allPeers, peer;
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                allPeers = _store2.default.getState().allPeers;
                                peer = (0, _find2.default)(allPeers, function (_ref6) {
                                  var ip = _ref6.ip;
                                  return ip === member.id;
                                });

                                if (!(!peer || !peer.connected)) {
                                  _context2.next = 5;
                                  break;
                                }

                                _context2.next = 5;
                                return connectWithPeer(member.id, 8334);

                              case 5:
                              case 'end':
                                return _context2.stop();
                            }
                          }
                        }, _callee2, _this2);
                      })), 10 * 1000);

                    case 5:
                    case 'end':
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            return function (_x2) {
              return _ref4.apply(this, arguments);
            };
          }());

          // add basic networking
          tcpServer = _net2.default.createServer();

          tcpServer.on('connection', handleConnection);
          tcpServer.listen(8334, '0.0.0.0', function () {
            console.log('> TCP/IP server listening on ', tcpServer.address());
          });

          // API endpoints
          app.post('/send', _sendMoney.sendMoney);

        case 31:
        case 'end':
          return _context4.stop();
      }
    }
  }, _callee4, this);
})));

// given an IP address, establish a TCP/IP connection with the node
function connectWithPeer(ip, port) {
  try {
    var client = new _net2.default.Socket();
    client.setEncoding('utf8');

    client.connect(port, ip, function () {
      console.log('> Connected to peer: ', ip + ':' + port);
      _store2.default.dispatch({ type: 'CONNECT_PEER', ip: ip, client: client, port: port });
      // send version number and last block hash to peer
      var lastBlockHash = _store2.default.getState().lastBlock.hash;
      client.write(['VERSION', 1, lastBlockHash].join(DL));
    });
    var ctx = { client: client, isServer: false, ip: ip };
    client.on('data', _handleData.handleData.bind(ctx));
    client.on('error', function (err) {
      return console.log(err);
    });
  } catch (e) {
    console.log('> Could not connect with peer: ', e.message);
  }
}

// when another node connects with our TCP/IP listener, respond accordingly
function handleConnection(conn) {
  console.log('> New client connection from: ', conn.remoteAddress + ':' + conn.remotePort);
  conn.setEncoding('utf8');
  var ctx = { client: conn, isServer: true, ip: conn.remoteAddress };
  _store2.default.dispatch({ type: 'CONNECT_PEER', client: conn, ip: conn.remoteAddress, port: conn.remotePort });
  conn.on('data', _handleData.handleData.bind(ctx));
  conn.on('error', function (err) {
    return console.log(err);
  });
}

// get public facing IP address
function getIPAddress() {
  return new Promise(function (resolve, reject) {
    _network2.default.get_public_ip(function (err, ip) {
      if (err) {
        reject(err);
      }
      resolve(ip);
    });
  });
}

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("babel-register");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("pusher-js");

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(26),
    isArrayLike = __webpack_require__(39),
    keys = __webpack_require__(17);

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(55),
    getMatchData = __webpack_require__(117),
    matchesStrictComparable = __webpack_require__(41);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(27),
    baseIsEqual = __webpack_require__(32);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),
/* 56 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(7);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(7);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(7);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(7);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(6);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 62 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 63 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 64 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(6),
    Map = __webpack_require__(15),
    MapCache = __webpack_require__(16);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(29),
    isMasked = __webpack_require__(69),
    isObject = __webpack_require__(9),
    toSource = __webpack_require__(31);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(8);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 68 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(70);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(0);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 71 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(73),
    ListCache = __webpack_require__(6),
    Map = __webpack_require__(15);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(74),
    hashDelete = __webpack_require__(75),
    hashGet = __webpack_require__(76),
    hashHas = __webpack_require__(77),
    hashSet = __webpack_require__(78);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(10);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 75 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(10);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(10);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(10);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(11);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 80 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(11);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(11);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(11);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(27),
    equalArrays = __webpack_require__(33),
    equalByTag = __webpack_require__(90),
    equalObjects = __webpack_require__(94),
    getTag = __webpack_require__(112),
    isArray = __webpack_require__(1),
    isBuffer = __webpack_require__(35),
    isTypedArray = __webpack_require__(38);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(16),
    setCacheAdd = __webpack_require__(86),
    setCacheHas = __webpack_require__(87);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 86 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 87 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 88 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 89 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(8),
    Uint8Array = __webpack_require__(91),
    eq = __webpack_require__(28),
    equalArrays = __webpack_require__(33),
    mapToArray = __webpack_require__(92),
    setToArray = __webpack_require__(93);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(0);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 92 */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 93 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(95);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(96),
    getSymbols = __webpack_require__(98),
    keys = __webpack_require__(17);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(97),
    isArray = __webpack_require__(1);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 97 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(99),
    stubArray = __webpack_require__(100);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 99 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 100 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(102),
    isArguments = __webpack_require__(34),
    isArray = __webpack_require__(1),
    isBuffer = __webpack_require__(35),
    isIndex = __webpack_require__(37),
    isTypedArray = __webpack_require__(38);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 102 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(3),
    isObjectLike = __webpack_require__(4);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 104 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(3),
    isLength = __webpack_require__(18),
    isObjectLike = __webpack_require__(4);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 106 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(30);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(36)(module)))

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(109),
    nativeKeys = __webpack_require__(110);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 109 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(111);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 111 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(113),
    Map = __webpack_require__(15),
    Promise = __webpack_require__(114),
    Set = __webpack_require__(115),
    WeakMap = __webpack_require__(116),
    baseGetTag = __webpack_require__(3),
    toSource = __webpack_require__(31);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(2),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(2),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(2),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(2),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(40),
    keys = __webpack_require__(17);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(32),
    get = __webpack_require__(119),
    hasIn = __webpack_require__(126),
    isKey = __webpack_require__(19),
    isStrictComparable = __webpack_require__(40),
    matchesStrictComparable = __webpack_require__(41),
    toKey = __webpack_require__(13);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(42);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(121);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(122);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(16);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(124);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(8),
    arrayMap = __webpack_require__(125),
    isArray = __webpack_require__(1),
    isSymbol = __webpack_require__(12);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 125 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(127),
    hasPath = __webpack_require__(128);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),
/* 127 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(43),
    isArguments = __webpack_require__(34),
    isArray = __webpack_require__(1),
    isIndex = __webpack_require__(37),
    isLength = __webpack_require__(18),
    toKey = __webpack_require__(13);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),
/* 129 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(131),
    basePropertyDeep = __webpack_require__(132),
    isKey = __webpack_require__(19),
    toKey = __webpack_require__(13);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),
/* 131 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(42);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),
/* 133 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(135);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(136);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9),
    isSymbol = __webpack_require__(12);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 137 */
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
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hash = Hash;
exports.getAddress = getAddress;
exports.makeWallet = makeWallet;

var _coinstring = __webpack_require__(139);

var _coinstring2 = _interopRequireDefault(_coinstring);

var _crypto = __webpack_require__(140);

var _crypto2 = _interopRequireDefault(_crypto);

var _elliptic = __webpack_require__(45);

var _ripemd = __webpack_require__(46);

var _ripemd2 = _interopRequireDefault(_ripemd);

var _secureRandom = __webpack_require__(141);

var _secureRandom2 = _interopRequireDefault(_secureRandom);

var _jsSha = __webpack_require__(14);

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
/* 139 */
/***/ (function(module, exports) {

module.exports = require("coinstring");

/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 141 */
/***/ (function(module, exports) {

module.exports = require("secure-random");

/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectToDB = undefined;

var connectToDB = exports.connectToDB = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', new Promise(function (resolve, reject) {
              _mongoose2.default.connect('mongodb://localhost:27017/nodecoin', function (err) {
                if (err) {
                  throw new Error('Error connecting to mongo. ' + err);
                  reject(err);
                } else {
                  console.log('> Successfully conected to MongoDB 🔐');
                  resolve(true);
                }
              });
            }));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function connectToDB() {
    return _ref.apply(this, arguments);
  };
}();

var _mongoose = __webpack_require__(22);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleData = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var handleData = exports.handleData = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    var client, isServer, ip, lastBlockHash, version, peerLastBlockHash, myVersion, peerLastBlock, blocks, blockheaders, block, index, lastBlock, savedBlock, newBlock, _data$split, _data$split2, messageType, args, _args, _store$getState, peers, unfetchedHeaders, peer, _header, header, msg, isValid, numBlocksToSave;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            client = this.client, isServer = this.isServer, ip = this.ip;

            console.log(data.split(DL).join(' '));
            // initialize variables
            lastBlockHash = void 0, version = void 0, peerLastBlockHash = void 0, myVersion = void 0, peerLastBlock = void 0, blocks = void 0, blockheaders = void 0, block = void 0, index = void 0, lastBlock = void 0;
            savedBlock = void 0, newBlock = void 0;
            // get message type

            _data$split = data.split(DL), _data$split2 = _toArray(_data$split), messageType = _data$split2[0], args = _data$split2.slice(1);
            _context.t0 = messageType;
            _context.next = _context.t0 === 'VERSION' ? 8 : _context.t0 === 'GETBLOCKS' ? 24 : _context.t0 === 'BLOCKHEADERS' ? 34 : _context.t0 === 'REQUESTBLOCK' ? 54 : _context.t0 === 'SENDBLOCK' ? 60 : 80;
            break;

          case 8:
            _args = _slicedToArray(args, 2);
            // check if version is compatible

            version = _args[0];
            peerLastBlockHash = _args[1];

            myVersion = _store2.default.getState().version;

            if (!(myVersion.toString() !== version)) {
              _context.next = 14;
              break;
            }

            return _context.abrupt('return');

          case 14:
            // if isServer, send response VERSION message
            lastBlockHash = _store2.default.getState().lastBlock.hash;
            if (isServer) {
              client.write(['VERSION', 1, lastBlockHash].join(DL));
            }
            // if peer has same blockheader, set peer as synced

            if (!(peerLastBlockHash === lastBlockHash)) {
              _context.next = 19;
              break;
            }

            _store2.default.dispatch({ type: 'SYNC_PEER', ip: ip });
            return _context.abrupt('return');

          case 19:
            _context.next = 21;
            return _Block2.default.findOne({ hash: peerLastBlockHash });

          case 21:
            peerLastBlock = _context.sent;

            if (!peerLastBlock) {
              client.write(['GETBLOCKS', lastBlockHash].join(DL));
            } else {
              _store2.default.dispatch({ type: 'SYNC_PEER', ip: ip });
            }
            return _context.abrupt('break', 80);

          case 24:
            // scan if we have blocks after the block hash provided
            // if we have blocks, send response BLOCKHEADERS message
            peerLastBlockHash = args[0];
            _context.next = 27;
            return _Block2.default.findOne({ hash: peerLastBlockHash });

          case 27:
            peerLastBlock = _context.sent;

            if (!peerLastBlock) {
              _context.next = 33;
              break;
            }

            _context.next = 31;
            return _Block2.default.find({ timestamp: { $gt: peerLastBlock.timestamp } }).sort({ timestamp: 1 }).limit(50);

          case 31:
            blocks = _context.sent;

            client.write(['BLOCKHEADERS'].concat(_toConsumableArray(blocks.map(function (_ref2) {
              var hash = _ref2.hash;
              return hash;
            }))).join(DL));

          case 33:
            return _context.abrupt('break', 80);

          case 34:
            // go through list of connected peers, and send REQUESTBLOCK evenly across network
            blockheaders = args;

            if (blockheaders.length) {
              _context.next = 38;
              break;
            }

            _store2.default.dispatch({ type: 'SYNC_PEER', ip: ip });
            return _context.abrupt('return');

          case 38:
            _store2.default.dispatch({ type: 'ADD_UNFETCHED_HEADERS', headers: blockheaders });
            _store$getState = _store2.default.getState(), peers = _store$getState.allPeers, unfetchedHeaders = _store$getState.unfetchedHeaders;

            blockheaders = Array.from(unfetchedHeaders);
            index = 0;

          case 42:
            if (!blockheaders.length) {
              _context.next = 53;
              break;
            }

            peer = peers[index];

            if (!peer.client) {
              _context.next = 51;
              break;
            }

            _header = blockheaders.shift();

            peer.client.write(['REQUESTBLOCK', _header].join(DL));
            _store2.default.dispatch({ type: 'LOADING_BLOCK', header: _header });
            index = peers.length % (index + 1);
            _context.next = 51;
            return (0, _wait.wait)(1);

          case 51:
            _context.next = 42;
            break;

          case 53:
            return _context.abrupt('break', 80);

          case 54:
            // check if we have the requested block
            // if we have the block, serialize and send response SENDBLOCK message
            header = args[0];
            _context.next = 57;
            return _Block2.default.findOne({ hash: header });

          case 57:
            block = _context.sent;

            if (block) {
              msg = JSON.stringify(block);

              client.write(['SENDBLOCK', JSON.stringify(block)].join(DL));
            }
            return _context.abrupt('break', 80);

          case 60:
            // validate block and its transactions
            // if block is valid, add it to MongoDB and update lastBlock and numBlocks in Redux store
            block = JSON.parse(args[0]);
            // check if already have
            _context.next = 63;
            return _Block2.default.findOne({ hash: block.hash });

          case 63:
            savedBlock = _context.sent;

            if (!savedBlock) {
              _context.next = 66;
              break;
            }

            return _context.abrupt('return');

          case 66:
            // if don't have, does the previousHash match our lastBlock.hash?
            lastBlock = _store2.default.getState().lastBlock;

            if (lastBlock) {
              _context.next = 69;
              break;
            }

            return _context.abrupt('break', 80);

          case 69:
            _context.next = 71;
            return (0, _validateBlock.isBlockValid)(block, lastBlock);

          case 71:
            isValid = _context.sent;

            if (!isValid) {
              _context.next = 79;
              break;
            }

            // add block to blockchain
            newBlock = new _Block2.default(block);
            _context.next = 76;
            return newBlock.save();

          case 76:
            _store2.default.dispatch({ type: 'NEW_BLOCK', block: newBlock });
            numBlocksToSave = _store2.default.getState().unfetchedHeaders.size;

            if (numBlocksToSave <= 0) {
              lastBlockHash = _store2.default.getState().lastBlock.hash;
              client.write(['GETBLOCKS', lastBlockHash].join(DL));
            }
            // remove from orphan and unfetched / loading pools

          case 79:
            return _context.abrupt('break', 80);

          case 80:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function handleData(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _Block = __webpack_require__(5);

var _Block2 = _interopRequireDefault(_Block);

var _validateBlock = __webpack_require__(23);

var _store = __webpack_require__(47);

var _store2 = _interopRequireDefault(_store);

var _wait = __webpack_require__(146);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var DL = '~~~~~~';

/***/ }),
/* 145 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var wait = exports.wait = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(sec) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              setTimeout(function () {
                resolve();
              }, 1000 * sec);
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function wait(_x) {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/***/ }),
/* 147 */
/***/ (function(module, exports) {

module.exports = require("net");

/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports = require("network");

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.seedBlocks = exports.myWallet = exports.COIN = exports.difficulty = undefined;

var seedBlocks = exports.seedBlocks = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var genesisOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var result, blk, header, cbTx, tx, newBlock;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = [];

            console.log('> Seeding db with initial blocks...');
            blk = void 0, header = void 0, cbTx = void 0, tx = void 0, newBlock = void 0;
            // remove existing blocks first from MongoDB

            _context.next = 5;
            return _Block4.default.find({}).remove({});

          case 5:
            ////////////////////////////////////////////////////////
            //
            // load genesis block first
            //
            ///////////////////////////////////////////////////////
            blk = new _Block2.default({}, [], true);
            blk.findCorrectNonce();
            // save genesis block to MongoDB
            newBlock = new _Block4.default(blk.getDBFormat());
            _context.next = 10;
            return newBlock.save();

          case 10:
            result.push(newBlock);
            console.log('> Genesis block saved: ', newBlock.hash);

            if (!genesisOnly) {
              _context.next = 14;
              break;
            }

            return _context.abrupt('return', [newBlock]);

          case 14:
            ///////////////////////////////////////////////////////
            //
            // create new block that awards coinbase to friendWallet
            //
            ///////////////////////////////////////////////////////
            header = {
              version: 1,
              previousHash: newBlock.hash,
              merkleHash: (0, _uuid2.default)(), // we use a random unique ID for now
              difficulty: difficulty,
              nonce: 0,
              timestamp: new Date().getTime()
            };
            cbTx = {
              vin: [{ prevout: "COINBASE", n: null }],
              vout: [{ scriptPubKey: myWallet.address, nValue: 50 * COIN }]
            };
            tx = {
              vin: [{
                prevout: newBlock.txs[0].hash, n: 0, scriptSig: myWallet.publicKey + ' ' + (0, _verifySignature.unlockTransaction)(newBlock.txs[0].hash, myWallet.privateKey)
              }],
              vout: [{ scriptPubKey: friendWallet.address, nValue: 5 * COIN }, { scriptPubKey: myWallet.address, nValue: 45 * COIN }]
            };
            blk = new _Block2.default(header, [cbTx, tx], false);
            blk.findCorrectNonce();

            newBlock = new _Block4.default(blk.getDBFormat());
            _context.next = 22;
            return newBlock.save();

          case 22:
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
              merkleHash: (0, _uuid2.default)(), // we use a random unique ID for now
              difficulty: difficulty,
              nonce: 0,
              timestamp: new Date().getTime()
            };
            cbTx = {
              vin: [{ prevout: "COINBASE", n: null }],
              vout: [{ scriptPubKey: myWallet.address, nValue: 50 * COIN }]
            };
            tx = {
              vin: [{
                prevout: newBlock.txs[1].hash, n: 0, scriptSig: friendWallet.publicKey + ' ' + (0, _verifySignature.unlockTransaction)(newBlock.txs[1].hash, friendWallet.privateKey)
              }],
              vout: [{ scriptPubKey: myWallet.address, nValue: 2 * COIN }, { scriptPubKey: friendWallet.address, nValue: 3 * COIN }]
            };
            blk = new _Block2.default(header, [cbTx, tx], false);
            blk.findCorrectNonce();

            newBlock = new _Block4.default(blk.getDBFormat());
            _context.next = 32;
            return newBlock.save();

          case 32:
            result.push(newBlock);
            console.log('> Block #3 saved: ', newBlock.hash);
            return _context.abrupt('return', result);

          case 35:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function seedBlocks() {
    return _ref.apply(this, arguments);
  };
}();

__webpack_require__(21);

var _Block = __webpack_require__(24);

var _Block2 = _interopRequireDefault(_Block);

var _Block3 = __webpack_require__(5);

var _Block4 = _interopRequireDefault(_Block3);

var _verifySignature = __webpack_require__(20);

var _uuid = __webpack_require__(150);

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var difficulty = exports.difficulty = 22;
var COIN = exports.COIN = 100000000;

var myWallet = exports.myWallet = {
  privateKey: '0fcb37c77f68a69b76cd5b160ac9c85877b4e8a09d8bcde2c778715c27f9a347',
  publicKey: '044283eb5f9aa7421f646f266fbf5f7a72b7229a7b90a088d1fe45292844557b1d80ed9ac96d5b3ff8286e7794e05c28f70ae671c7fecd634dd278eb0373e6a3ba',
  publicKeyHash: 'ed2f84f67943321bf73747936db3e7273ada7f6c',
  address: '1Nd85AnFYDtaQAG6vF9FVWXFWksG5HuA3M',
  privateKeyWIF: '5HwF1jU38V8YhpBy9PuNC4hTYkKrDccLE28qV7tLxZ7u3pKXCy4'
};

var friendWallet = {
  privateKey: '6128428978e30fc034c95b7b091b373b875bdd73a0acf83c09d37bff72361349',
  publicKey: '04804a9ed2855fcea0f5b6e23e587a6c6f7159f15c84b9c82474231cfdac04827fac72a36bd0b463fc61c4d66a954aa7d5f95bde970804f81c8d6f712390516fbb',
  publicKeyHash: 'f3a7ee518818e7adc56ed12e9f483712fc4dd0d5',
  address: '1PDLNfJq5GAEn5StESZuBpaBe6B3134vmD',
  privateKeyWIF: '5JZ5LHz7Kr3FXeU7asLfffasonpmxUX3smTQb8LtsD21UQqiYqo'
};

/***/ }),
/* 150 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendMoney = exports.getWalletData = undefined;

var getWalletData = exports.getWalletData = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(address) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', { utxo: [], balance: 0 });

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getWalletData(_x) {
    return _ref.apply(this, arguments);
  };
}();

// curl -XPOST localhost:3000/send -d publicKey=044283eb5f9aa7421f646f266fbf5f7a72b7229a7b90a088d1fe45292844557b1d80ed9ac96d5b3ff8286e7794e05c28f70ae671c7fecd634dd278eb0373e6a3ba -d amount=10 -d privateKey=0fcb37c77f68a69b76cd5b160ac9c85877b4e8a09d8bcde2c778715c27f9a347 -d toAddress=0482a39675cdc06766af5192a551b703c5090fc67f6e403dfdb42b60d34f5e3539ad44de9197e7ac09d1db5a60f79552ce5c7984a3fc4643fb1911f3857d6dd34c | python -m json.tool


var sendMoney = exports.sendMoney = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, amount, privateKey, publicKey, toAddress, address, walletData, utxo, balance, isLessThanBalance, remaining, vin, vout, spentTxs, transaction, url, body, response;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, amount = _req$body.amount, privateKey = _req$body.privateKey, publicKey = _req$body.publicKey, toAddress = _req$body.toAddress;

            if (!(!amount || !privateKey || !publicKey || !toAddress)) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt('return', res.status(500).send({ error: 'Missing parameters [amount|privateKey|publicKey|toAddress]' }));

          case 3:
            if (typeof amount === 'string') {
              amount = parseInt(amount);
            }
            amount *= COIN;
            console.log('> Amount to send: ', amount);
            address = (0, _makeWallet.getAddress)(publicKey);
            _context2.next = 9;
            return getWalletData(address);

          case 9:
            walletData = _context2.sent;
            utxo = walletData.utxo, balance = walletData.balance;

            balance *= COIN;
            console.log('> Current balance: ', balance);
            utxo = utxo.sort(function (a, b) {
              return a.nValue < b.nValue;
            });
            // is transaction less than balance?
            isLessThanBalance = balance > amount;

            if (isLessThanBalance) {
              _context2.next = 17;
              break;
            }

            return _context2.abrupt('return', res.status(500).send({ error: 'Balance must be above amount to send.' }));

          case 17:
            remaining = amount;
            vin = [];
            vout = [];
            spentTxs = [];
            ////////////////////////////////////
            //
            // create inputs and outputs
            //
            ////////////////////////////////////

            transaction = { hash: (0, _jsSha2.default)(JSON.stringify({ vin: vin, vout: vout })), vin: vin, vout: vout };
            // broadcast to network

            url = 'https://pusher-presence-auth.herokuapp.com/transactions/new'; // can be http://localhost:3001/transactions/new if server running locally

            body = { tx: transaction, timestamp: new Date().getTime() };
            _context2.next = 26;
            return request.post(url, body);

          case 26:
            response = _context2.sent;

            console.log('> Send transaction response: ', response.data);
            res.status(200).send(response.data);

          case 29:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function sendMoney(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

var _jsSha = __webpack_require__(14);

var _jsSha2 = _interopRequireDefault(_jsSha);

var _makeWallet = __webpack_require__(138);

var _verifySignature = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var COIN = 100000000;

/***/ })
/******/ ]);
});
//# sourceMappingURL=nodecoin.js.map