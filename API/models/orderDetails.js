// booking.js
const mongoose = require('mongoose');

const orderDetailsSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  totalCost: {
    type: String,
    //required : true,
  }
});

const OrderDetails = mongoose.model('OrderDetails', orderDetailsSchema);

module.exports = OrderDetails;