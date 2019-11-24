const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const mongoose = require("mongoose");
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const config = require('./config/database')

//Inititalize Express
const app = express();

//Passport config
require('./config/passport')(passport);

// Connect mongoose
mongoose.connect(config.database, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let db = mongoose.connection;

//Check Connections
db.once("open", function () {
  console.log("Connected to Mongodb");
});

//Chek for DB errors
db.on("error", function (err) {
  console.log(err);
});



//EJS Middle Ware
app.use(expressLayouts);
app.set("view engine", "ejs");

//BodyParser
app.use(express.urlencoded({
  extended: false
}));

// Express session middle ware
app.use(session({
  secret: 'Secret',
  resave: true,
  saveUninitialized: true
}))

///PassPort middle Ware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash middle ware
app.use(flash());

// Global variables for error messages using flash 
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg')
  res.locals.error = req.flash('error')
  next();
});


//Routes
app.use("/", require("./routes/app"));
app.use("/users", require("./routes/users"));



//Set Static Folder
app.use(express.static(path.join(__dirname, "public")));

// Start Server
app.listen(5000, function () {
  console.log("Server started on port 5000");
});