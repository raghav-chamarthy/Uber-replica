require('dotenv').config()
var mongoose = require('mongoose');
 

mongoose.Promise = global.Promise;
var mongoAddress = 'mongodb://' + process.env.MONGO_DB_HOST + ':' + process.env.MONGO_DB_PORT + '/Uber';
mongoose.connect(mongoAddress);

module.exports = {
  mongoose
};
