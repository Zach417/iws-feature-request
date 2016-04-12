var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  title: String,
  description: String,
  client: String,
  clientPriority: Number,
  targetDate: Date,
  ticketUrl: String,
  productArea: String,
});

module.exports = mongoose.model('Feature', schema);
