const express = require('express');
const {mongoose} = require('./../db/mongoose');
const usersRoute = express.Router();
const _ = require('lodash');
const {userCoordinates} = require('./../models').userCoordinates;

usersRoute.post('/coordinates',(req,res) => {
    var body = _.pick(req.body,['user_id','type','latitude','longitude']);
    var UserCoordinates = new userCoordinates(body);
    UserCoordinates.save().then((result) => {
        res.status(201).send(result);
    }).catch((e) => {
        res.status(500).send(e);
    });
});

module.exports = usersRoute;