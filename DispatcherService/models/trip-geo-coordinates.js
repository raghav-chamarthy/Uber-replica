const mongoose = require('mongoose');
const _ = require('lodash');

const tripCoordinatesSchema = mongoose.Schema({
    trip_id : String,
    driver_id: String,
    rider_id: String,
    latitude : Number,
    longitude : Number
});

tripCoordinatesSchema.methods.toJSON = function () {
    var trip = this;
    var tripObject = trip.toObject();
    return _.pick(tripObject,['_id']);
  };

const tripCoordinates = mongoose.model('tripCoordinates',tripCoordinatesSchema);

module.exports = {
    tripCoordinates
};