const mongoose = require("mongoose");

//User Schema

let userSchema = mongoose.Schema({
  signup_firstname: {
    type: String,
    required: true
  },
  signup_email: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  signup_password: {
    type: String,
    required: true
  }
});

const User = (module.exports = mongoose.model("all_users", userSchema));