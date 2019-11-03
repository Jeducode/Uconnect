const express = require("express");
const router = express.Router();

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

// POST REQUESTS
router.post("/register", (req, res) => {
  const {
    signup_firstname,
    signup_email,
    signup_password,
    signup_password2
  } = req.body;

  let errors = [];

  //Check required fields
  if (
    !signup_firstname ||
    !signup_email ||
    !signup_password ||
    !signup_password2
  ) {
    errors.push({
      msg: "Please, fill in all fields"
    });
  }

  //check password match
  if (signup_password !== signup_password2) {
    errors.push({
      msg: "Passwords do not match"
    });
  }

  //   Check PasswordLength
  if (signup_password.length < 6) {
    errors.push({
      msg: "Password length too short. "
    });
  }

  if (errors.length > 0) {
    res.render("register", {
      errors,
      signup_firstname,
      signup_email,
      signup_password,
      signup_password2
    });
  } else {
    res.send("pass");
  }
});

module.exports = router;