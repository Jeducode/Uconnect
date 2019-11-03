const express = require("express");
const router = express.Router();

//Home Router
router.get("/", (req, res) => res.render("login"));

//Login Page
router.get("/login", (req, res) => res.render("login"));
module.exports = router;

//Register Router
router.get("/register", (req, res) => res.render("register"));
