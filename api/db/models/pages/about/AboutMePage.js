const mongoose = require('mongoose')

// Associated models
const TextContent = require('../TextContent');
const textContentSchema = mongoose.model('TextContent').schema;

// Schema
const BioPage = new mongoose.Schema({
	pageType: {
    type: String,
    default: "textContent"
  },
	pageName: {
    type: String,
    default: "ABOUT ME"
  },
  pageContents: {
    type: [textContentSchema]
  }
})


// Export model
module.exports = mongoose.model('bioPage', BioPage)