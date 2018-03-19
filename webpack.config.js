// webpack.config.js
const webpack = require('webpack');
const fs = require('fs');

const env = process.env.WEBPACK_ENV;
const libraryName = 'nodecoin';
let plugins = [ ];
let outputFile = 'nodecoin.js';

if (env === 'production') {
  outputFile = 'nodecoin.min.js';
}

let nodeModules = fs.readdirSync('node_modules')
  .reduce((acc, mod) => {
    if (mod === '.bin') {
      return acc;
    }
    acc[ mod ] = `commonjs ${ mod}`;
    return acc;
 }, {});

let config = {
  entry: `${__dirname }/src/index.js`,
  output: {
    path: `${__dirname }/build`,
    filename: outputFile,
 },
 target: 'node',
 externals: nodeModules,
 mode: env === 'production' ? 'production' : 'development',
 module: {
   rules: [
     {
       test: /(\.js)$/,
       use: 'babel-loader',
       exclude: /(node_modules|build)/,
     },
   ],
 },
 resolve: {
   extensions: [ '.js' ],
 },
 plugins: plugins,
};

module.exports = config;
