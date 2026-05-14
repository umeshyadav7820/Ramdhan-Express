const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  username: String,
  mobile: String,
  address: String,
});

module.exports = mongoose.model("User", userSchema);