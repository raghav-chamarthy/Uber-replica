const mongoose = require('mongoose');
const _ = require('lodash');
const userCoordinatesSchema = mongoose.Schema({
    user_id : String,
    type : String,
    latitude : Number,
    longitude : Number
});

userCoordinatesSchema.methods.toJSON = function () {
    var user = this;
    var userObject = user.toObject();
    return _.pick(userObject,['_id']);
  };

const userCoordinates = mongoose.model('userCoordinates',userCoordinatesSchema);

module.exports = {
    userCoordinates
};