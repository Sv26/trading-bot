const mongoose = require('mongoose');

const tradeSchema = new mongoose.Schema({
  action: String,
  price: Number,
  time: { type: Date, default: Date.now },
});

const Trade = mongoose.model('Trade', tradeSchema);

module.exports = Trade;
