// Set up express
const express = require('express')
const app = express()
const db = require('./api/db/connection')

// Body parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Use .env files in local setup
!process.env.NODE_ENV ? require('dotenv').config() : console.log('DEV:PROD')

//Add Headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*')

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST')

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

    // Pass to next layer of middleware
    next();
});

// Import routes
const about = require('./api/routes/about');

// Use routes
app.use('/about', about);

// Listen for the server at a port.
app.listen(process.env.PORT || 8000, (err) => {
    console.log('Server running on ' + 8000)
})
