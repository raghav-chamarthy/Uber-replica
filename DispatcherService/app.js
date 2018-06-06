'use strict';
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.json());

const {usersRoute,tripsRoute} = require('./routes');
const PORT = process.env.PORT || 3000;

app.use('/user',usersRoute);
app.use('/trip',tripsRoute);

app.listen(PORT,() => {
    console.log(`Application is running and listening on port : ${PORT}`)
});

