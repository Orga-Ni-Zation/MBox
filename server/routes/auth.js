const express = require('express');
const passport = require('passport');
const path = require('path');
const bcrypt = require('bcrypt');

// Our user model
const User = require('../models/User');

const authRoutes = express.Router();

function returnMessage(message){
  return (req,res,next) => res.status(500).json({error:true, message:message});
}
//authRoutes.post('/signup',returnMessage("This should be a POST"));
authRoutes.post('/signup', (req, res, next) => {
    var name = req.body.newUser.name;
    var lastName=  req.body.newUser.lastName;
    var birthday= req.body.newUser.birthday;
    var username= req.body.newUser.username;
    var password= req.body.newUser.password;
    var email=  req.body.newUser.email;
    var gender= req.body.newUser.gender;
    var membership= req.body.newUser.membership;




  if (!username || !password) {
    res.status(400).json({
      message: 'Provide username and password'
    });
    return;
  }

  User.findOne({
    username
  }, '_id').exec().then(foundUser => {
    if (foundUser) {
      res.status(400).json({
        message: 'The username already exists'
      });
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const theUser = new User({
      name,
      lastName,
      gender,
      username,
      password: hashPass,
      email,
      membership,
      birthday,

    });
    console.log(theUser);
    theUser.save().then(user => {
      req.login(user, (err) => {
        if (err) {
          res.status(500).json({
            message: 'Something went wrong'
          });
          return;
        }
        res.status(200).json(req.user);
      });
    }).catch(e => res.status(400).json({
      message: 'Something went wrong'
    }));

  });
});

/* Login route: Logs the user in having a username and a password. Uses local strategy from passport */
authRoutes.get('/login',returnMessage("This should be a POST"));
authRoutes.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    if (err) {
      res.status(500).json({
        message: 'Something went wrong'
      });
      return;
    }

    if (!theUser) {
      res.status(401).json(failureDetails);
      return;
    }

    req.login(theUser, (err) => {
      if (err) {
        res.status(500).json({
          message: 'Something went wrong'
        });
        return;
      }
      // We are now logged in (notice req.user)
      res.status(200).json(req.user);
    });
  });
});



/* User authenticated Middleware: Returns JSON ERROR */
function ensureLoginOrJsonError(error = "Unauthorized") {
  return (req, res, next) => req.isAuthenticated() ? next() : res.status(403).json({
    error: error
  });
}

/* Logout route: remember this is a GET! */
authRoutes.get('/logout', ensureLoginOrJsonError("User is not logged in"), (req, res, next) => {
  req.logout();
  res.status(200).json({
    message: 'Success'
  });
});

/* Check if user is logged in and returns the user or shows error as JSON instead*/
authRoutes.get('/loggedin', ensureLoginOrJsonError(), (req, res, next) => {
  return res.status(200).json(req.user);
});


authRoutes.get('/facebook',
  passport.authenticate('facebook', { scope: ['user_friends', 'manage_pages'] }));

authRoutes.get('/facebook/user',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    function(req, res) {
      console.log(req)
      res.status(200).json({"hola":"hola"});
    });

authRoutes.get("/logout", (req, res, next) => {
  req.logout();
  res.redirect('/');
});

module.exports = authRoutes;
