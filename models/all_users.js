const mongoose = require("mongoose");

//User Schema

let userSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  user_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

let user_details = (module.exports = mongoose.model("Users", userSchema));
