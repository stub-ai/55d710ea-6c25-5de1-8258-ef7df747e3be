const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  img: { data: Buffer, contentType: String },
  tags: [String]
});

module.exports = mongoose.model('Image', ImageSchema);