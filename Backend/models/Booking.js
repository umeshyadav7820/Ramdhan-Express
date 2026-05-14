const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: String,
  phone: String,
  pickup: String,
  drop: String,
  vehicle: String,
  userId: String,
}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);