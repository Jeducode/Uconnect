const express = require("express");
const router = express.Router();

//Login Router
router.get("/", (req, res) => res.render("login"));

//Register Router
router.get("/register", (req, res) => res.render("register"));

module.exports = router;
