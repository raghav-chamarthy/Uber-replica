const mongoose = require('mongoose');
const logger = require('./../logger/logger').logger;

const mongoAddress = 'mongodb://' + process.env.MONGO_DB_CONN_STRING;
logger.log('debug',mongoAddress);
mongoose.connect(mongoAddress);

module.exports = {
  mongoose
};
