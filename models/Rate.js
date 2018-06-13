const mongoose = require('mongoose');

const RateSchema = new mongoose.Schema({
  value: String,
  updated_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Rate', RateSchema);
