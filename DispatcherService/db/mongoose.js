require('dotenv').config()
const mongoose = require('mongoose');
const logger = require('./../logger/logger').logger;

mongoose.Promise = global.Promise;
const mongoAddress = 'mongodb://' + process.env.MONGO_DB_CONN_STRING;
logger.log('debug',mongoAddress);
mongoose.connect(mongoAddress);

module.exports = {
  mongoose
};
