const express = require('express')
const router = express.Router()

// Pages
const BioPage = require('../db/models/pages/about/AboutMePage')

router.get('/', (req, res, next) => {
  let bioPage;
  BioPage.find().exec().then(page => bioPage = page);

  console.log(bioPage);
});

module.exports = router;