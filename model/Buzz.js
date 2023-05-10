const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new mongoose.Schema({
  order_id: {
    type: String,
    unique: true,
  },
  item_name: String,
  cost: Number,
  order_date: Date,
  delivery_date: Date,
});

// Create the Order model

module.exports = mongoose.model('Order', orderSchema);

// books
