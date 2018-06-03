'use strict'
const {mongoose} = require('./db/mongoose');
const {tripCoordinates} = require('./models/trip-geo-coordinates');
const {userCoordinates} = require('./models/user-geo-coordinates');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const _ = require('lodash');



app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

app.get('/',(req,res) => {
    res.send('Welcome to my Uber App');
});


app.post('/trip/coordinates',(req,res) => {
    var body = _.pick(req.body,['trip_id','driver_id','rider_id','latitude','longitude']);
    var TripCoordinates = new tripCoordinates(body);
    TripCoordinates.save().then((result) => {
        res.status(201).send(result);
    }).catch((e) => {
        res.status(500).send(e);
    });
});

app.post('/user/coordinates',(req,res) => {
    var body = _.pick(req.body,['user_id','type','latitude','longitude']);
    var UserCoordinates = new userCoordinates(body);
    UserCoordinates.save().then((result) => {
        res.status(201).send(result);
    }).catch((e) => {
        res.status(500).send(e);
    });
});

app.listen(PORT,() => {
    console.log(`Application is running and listening on port : ${PORT}`)
});

