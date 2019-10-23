const express = require("express");
const router = express.Router();

//Login Page
router.get("/login", (req, res) => res.render("login"));

//Profile Page
router.get("/profile", (req, res) => res.render("profile"));

//Blog Post
router.get("/blogposts", (req, res) => res.render("blogposts"));

//Create blog Post
router.get("/create-blogpost", (req, res) => res.render("create-blogpost"));

//Create blog Post
router.get("/find-user", (req, res) => res.render("find-user"));

//All Users
router.get("/all-users", (req, res) => res.render("all_users"));

//All Users
router.get("/chat", (req, res) => res.render("chat"));

//All Users
router.get("/setting", (req, res) => res.render("settings"));

module.exports = router;
