const mongoose = require("mongoose");

//User Schema

let userSchema = mongoose.Schema({
  f_name: {
    type: String,
    required: true
  },
  l_name: {
    type: String,
    required: true
  },
  user_name: {
    type: String,
    required: true
  },
  email: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

let user_details = (module.exports = mongoose.model("Users", userSchema));
