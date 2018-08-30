const {mongoose} = require('./../db/mongoose');
const {tripCoordinates} = require('./../models').tripCoordinates;
const _ = require('lodash');

module.exports.saveTripCoordinates = function (req,res) {
    var body = _.pick(req.body,['trip_id','driver_id','rider_id','latitude','longitude']);
    var TripCoordinates = new tripCoordinates(body);
    TripCoordinates.save().then((result) => {
        res.status(201).send(result);
    }).catch((e) => {
        res.status(500).send(e);
    })
};