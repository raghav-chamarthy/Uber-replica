const {mongoose} = require('./../db/mongoose');
const _ = require('lodash');
const {userCoordinates} = require('./../models').userCoordinates;

module.exports.saveUserCoordinates = function (req,res) {
    var body = _.pick(req.body,['user_id','type','latitude','longitude']);
    var UserCoordinates = new userCoordinates(body);
    UserCoordinates.save().then((result) => {
        res.status(201).send(result);
    }).catch((e) => {
        res.status(500).send(e);
    });
};

