const mongoose = require('mongoose')

// Associated models

// Schema
const TextContent = new mongoose.Schema({
	contentType: {
    type: String,
    default: "textContent"
  },
	contentHeader: {
    type: String,
    default: null
  },
  content: {
    type: String,
    default: null
  }
})


// Export model
module.exports = mongoose.model('TextContent', TextContent)