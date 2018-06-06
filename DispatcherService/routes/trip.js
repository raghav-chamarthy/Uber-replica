const express = require('express');
const {mongoose} = require('./../db/mongoose');
const tripsRoute = express.Router();
const _ = require('lodash');
const {tripCoordinates} = require('./../models').tripCoordinates;



tripsRoute.post('/coordinates',(req,res) => {
    var body = _.pick(req.body,['trip_id','driver_id','rider_id','latitude','longitude']);
    var TripCoordinates = new tripCoordinates(body);
    TripCoordinates.save().then((result) => {
        res.status(201).send(result);
    }).catch((e) => {
        res.status(500).send(e);
    });
});

module.exports = tripsRoute;