// Set up express
const express = require('express')
const app = express()
const cors = require('cors');
const db = require('./api/db/connection')
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

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

// Authorization check
const authCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: process.env.JWKS_URI
    }),
    // This is the identifier we set when we created the API
    audience: process.env.AUTH0_AUDIENCE,
    issuer: process.env.AUTH0_ISSUER,
    algorithms: ['RS256']
});

// Import routes
// const about = require('./api/routes/about');

// Use routes
// app.use('/about', about);
// Public test route
app.get('/api/public', (req, res) => {
    res.json({message: 'hello from public route'});
});
// Private test route
app.get('/api/private', authCheck, (req,res) => {
    res.json({message: 'hello from private route'});
});

// Listen for the server at a port.
app.listen(process.env.PORT || 8000, (err) => {
    console.log('Server running on ' + 8000)
})
