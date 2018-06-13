require('dotenv').config()
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const mongoAddress = 'mongodb://' + process.env.MONGO_DB_CONN_STRING;
mongoose.connect(mongoAddress);

module.exports = {
  mongoose
};
