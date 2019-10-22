const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/all_users", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let db = mongoose.connection;

//Check Connections
db.once("open", function() {
  console.log("Connected to Mongodb");
});

//Chek for DB errors
db.on("error", function(err) {
  console.log(err);
});

//Inititalize Express
const app = express();

//EJS Middle Ware
app.use(expressLayouts);
app.set("view engine", "ejs");

//Routes
app.use("/", require("./routes/app"));
app.use("/", require("./routes/users"));

//Set Static Folder
app.use(express.static(path.join(__dirname, "public")));

// Start Server
app.listen(5000, function() {
  console.log("Server started on port 5000");
});
