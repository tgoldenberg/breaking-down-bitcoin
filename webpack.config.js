// webpack.config.js
const webpack = require('webpack');
const fs = require('fs');

const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const env = process.env.WEBPACK_ENV;
const libraryName = 'nodecoin';
let plugins = [ ];
let outputFile = 'nodecoin.js';

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFile = `${libraryName }.min.js`;
} else {
  outputFile = `${libraryName }.js`;
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
  devtool: 'sourcemap',
  target: 'node',
  output: {
    path: `${__dirname }/build`,
    filename: outputFile,
    library: 'events',
    libraryTarget: 'umd',
 },
 externals: nodeModules,
 module: {
   loaders: [
     {
       test: /(\.js)$/,
       loader: 'babel-loader',
       exclude: /(node_modules|build)/,
     },
   ],
 },
 resolve: {
   extensions: [ '.js' ],
 },
};

module.exports = config;
