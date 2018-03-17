import mongoose from 'mongoose';

mongoose.Promise = require('bluebird');

const schema = {
  hash          : { type: String, required: true, index: { unique: true } },
  vin           : { type: Array, required: true },
  vout          : { type: Array, required: true },
};

const TransactionSchema = new mongoose.Schema(schema);

const Transaction = mongoose.model('transactions', TransactionSchema);

export default Transaction;
