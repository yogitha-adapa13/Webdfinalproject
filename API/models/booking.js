// booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({

  customerName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  numberOfGuests: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'employees', // This should match the model name you've defined for the User
  },
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
