'use strict';
require('dotenv').config();

const morgan = require('morgan');
const logger = require('./logger/logger').logger;
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.json());
app.use(morgan('combined',{ stream : logger.stream}));

const {usersRoute,tripsRoute} = require('./routes');
const PORT = process.env.PORT || 3000;

app.use('/user',usersRoute);
app.use('/trip',tripsRoute);

app.listen(PORT,() => {
     logger.info(`Application running on port ${PORT}`);
});