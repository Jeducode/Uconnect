const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs')
const passport = require('passport')

// User Model

const User = require('../models/all_users');

//Profile Page
router.get("/profile", (req, res) => res.render("profile"));

//Blog Post
router.get("/posts", (req, res) => res.render("blogposts"));

//Create blog Post
router.get("/create-post", (req, res) => res.render("create-blogpost"));

//Create blog Post
router.get("/find-user", (req, res) => res.render("find-user"));

//All Users
router.get("/all-users", (req, res) => res.render("all_users"));

//All Users
router.get("/chat", (req, res) => res.render("chat"));

//All Users
router.get("/setting", (req, res) => res.render("settings"));


// Login Handle

module.exports = router;