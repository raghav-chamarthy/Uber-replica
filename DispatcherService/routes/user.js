const express = require('express');
const usersRoute = express.Router();
const userController = require('../controllers/index').userController

usersRoute.post('/coordinates',userController.saveUserCoordinates);

module.exports = usersRoute;