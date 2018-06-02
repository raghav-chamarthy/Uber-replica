'use strict'
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/',(req,res) => {
    res.send('Welcome to my Uber App');
})

app.listen(PORT,() => {
    console.log(`Application is running and listening on port : ${PORT}`)
});

