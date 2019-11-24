const LocalStrategy = require('passport-local').Strategy;
const config = require('./database')
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//Load User Model

const User = require('../models/all_users');

module.exports = function (passport) {
    passport.use(
        new LocalStrategy({
            usernameField: 'signup_email',
        }, (signup_email, signup_password, done) => {
            //Match User
            User.findOne({
                    signup_email: signup_email
                })
                .then(user => {
                    if (!user) {
                        return done(null, false, {
                            message: 'This email is not registered'
                        });
                    }
                    //Match Password
                    bcrypt.compare(signup_password, user.password, (err, isMatch) => {
                        if (err) throw err;
                        if (isMatch) {
                            return done(null, user);
                        } else {
                            return done(null, false, {
                                message: 'Password Incorrect'
                            });
                        }
                    });
                })
                .catch(err => console.log(err));
        })
    );

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

}