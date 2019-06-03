const express = require('express')
const router = express.Router()

// Pages
const BioPage = require('../db/models/pages/about/AboutMePage')

router.get('/', (req, res, next) => {
  res.json({message: 'hello'});
});

module.exports = router;