const express = require("express");
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcryptjs')

// User Model

const User = require('../models/all_users');

//Home Router
router.get("/", (req, res) => res.render("login"));

//Login Page
router.get("/login", (req, res) => res.render("login"));


//Register Router
router.get("/register", (req, res) => res.render("register"));

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
        //  Validation Passed
        User.findOne({
                signup_email: signup_email
            })
            .then(user => {
                if (user) {
                    errors.push({
                        msg: 'Email is already Registered'
                    })
                    res.render("register", {
                        errors,
                        signup_firstname,
                        signup_email,
                        signup_password,
                        signup_password2
                    });
                } else {
                    const newUser = new User({
                        signup_firstname,
                        signup_email,
                        signup_password
                    });

                    // Hash Password
                    bcrypt.genSalt(10, (err, salt) =>
                        bcrypt.hash(newUser.signup_password, salt, (err, hash) => {
                            if (err) throw err;
                            //Set Password to hash
                            newUser.signup_password = hash;

                            newUser.save()
                                .then(user => {
                                    req.flash('success_msg', 'You are now registered and can login');
                                    res.redirect('/login')
                                })
                                .catch(err => console.log(err))
                        }))
                }
            })

    }
});


//   LOGIN HANDLE

router.post('/login', (req, res, next) => {
    console.log(req.body)
    passport.authenticate('local', {
        successRedirect: 'users/profile',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next);
})


module.exports = router;