import mongoose from 'mongoose';

mongoose.Promise = require('bluebird');

const schema = {
  hash          : { type: String, required: true },
  version       : { type: Number, default: 1, required: true },
  previousHash  : { type: String, required: true },
  merkleHash    : { type: String, required: true },
  timestamp     : { type: Number, required: true, default: new Date().getTime() },
  difficulty    : { type: Number, required: true, default: 22 },
  nonce         : { type: Number, required: true },
  txs           : { type: Array, default: [ ] },
  blocksize     : { type: Number, required: true },
};

const BlockSchema = new mongoose.Schema(schema);

const BlockModel = mongoose.model('blocks', BlockSchema);

export default BlockModel;
