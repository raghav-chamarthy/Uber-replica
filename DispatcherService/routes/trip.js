const express = require('express');
const tripsRoute = express.Router();
const tripController = require('./../controllers/index').tripController;

tripsRoute.post('/coordinates',tripController.saveTripCoordinates);

module.exports = tripsRoute;