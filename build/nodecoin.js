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

var _express = __webpack_require__(2);

var _express2 = _interopRequireDefault(_express);

var _pusherJs = __webpack_require__(3);

var _pusherJs2 = _interopRequireDefault(_pusherJs);

var _bodyParser = __webpack_require__(4);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _net = __webpack_require__(7);

var _net2 = _interopRequireDefault(_net);

var _network = __webpack_require__(6);

var _network2 = _interopRequireDefault(_network);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// variables for Pusher network
var PUSHER_APP_KEY = '86e36fb6cb404d67a108'; // connect via public key
var MAX_PEERS = 25;

// initialize app server
var app = (0, _express2.default)();
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

app.listen(process.env.PORT || 3000, _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
  var _this = this;

  var ipAddr, pusher, channel, tcpServer;
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log('> App server listening on port ', process.env.PORT);
          // get public facing IP address
          _context2.next = 3;
          return getIPAddress();

        case 3:
          ipAddr = _context2.sent;

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
                          peers.push(id);
                        }
                      });
                      // only connect to a max of 25 nodes
                      i = 0;

                    case 4:
                      if (!(i < Math.min(MAX_PEERS, peers.length))) {
                        _context.next = 10;
                        break;
                      }

                      _context.next = 7;
                      return connectWithPeer(peers[i], 8334);

                    case 7:
                      i++;
                      _context.next = 4;
                      break;

                    case 10:
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

          // add basic networking
          tcpServer = _net2.default.createServer();

          tcpServer.on('connection', handleConnection);
          tcpServer.listen(8334, '0.0.0.0', function () {
            console.log('> TCP/IP server listening on ', tcpServer.address());
          });

        case 10:
        case 'end':
          return _context2.stop();
      }
    }
  }, _callee2, this);
})));

// given an IP address, establish a TCP/IP connection with the node
function connectWithPeer(ip, port) {
  var client = new _net2.default.Socket();

  client.connect(port, ip, function () {
    console.log('> Connected to peer: ', ip + ':' + port);
    // send version number and last block hash to peer
    client.write('VERSION 1 00000244a5bae572247ca9f5b9149fc3980fa90a7a70cd35030a29d81ebc88ea');
  });

  client.on('data', function (data) {
    console.log('> Received data from: ', ip + ':' + port, data);
  });
}

// when another node connects with our TCP/IP listener, respond accordingly
function handleConnection(conn) {
  console.log('> New client connection from: ', conn.remoteAddress + ':' + conn.remotePort);
  conn.setEncoding('utf8');
  conn.on('data', function (data) {
    console.log('> Received data: ', data);
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
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("pusher-js");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

module.exports = require("network");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("net");

/***/ })
/******/ ]);
});
//# sourceMappingURL=nodecoin.js.map