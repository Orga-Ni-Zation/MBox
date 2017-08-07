const express = require('express');
const passport = require('passport');
const path = require('path');
const bcrypt = require('bcrypt');
// Our user model
const User = require('./UserModel');
const authRoutes = express.Router();
const bcryptSalt = 10;

exports.listUser = function(req, res, next) {
  User.find()
    .then(userList => {
      res.json(userList);
    })
    .reject(err => {
      res.status(500).json(err);
    });
};

exports.signUp = function(req, res, next) {
  let username = req.body.username;
  let lastName = req.body.lastName;
  let birthday = req.body.birthday;
  let password = req.body.password;
  let email = req.body.email;
  let gender = req.body.gender;
  let interests = req.body.interests;
  let country = req.body.country;
  let address = req.body.address;
  let phone = req.body.address;



  console.log(username, password, email);
  if (!username || !password || !email) {
    res.status(400).json({
      message: 'Provide all the information'
    });
    return;
  }

  User.findOne({
    username
  }, '_id', (err, foundUser) => {
    if (foundUser) {
      res.status(400).json({
        message: 'The username already exists'
      });
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const theUser = new User({
      username,
      email,
      password: hashPass,
      lastName,
      gender,
      birthday,
      country,
      address,
      phone,
    




    });
    console.log(theUser);
    theUser.save((err) => {
      if (err) {
        res.status(400).json({
          message: 'Something went wrong'
        });
        return;
      }
      req.login(theUser, (err) => {
        if (err) {
          res.status(500).json({
            message: 'Something went wrong'
          });
          return;
        }
        res.status(200).json(req.user);
      });

    });
  });
};
exports.logIn = function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(401).json(info);
    }

    req.login(user, function(err) {
      if (err) {
        return res.status(500).json({
          message: 'something went wrong :('
        });
      }
      res.status(200).json(req.user);
    });
  })(req, res, next);
};

exports.editUser = function(req, res, next) {
  const updates = {
    username:      req.body.username,
    email:         req.body.email,
    password:      req.body.password,
    lastName: req.body.lastName,
    gender: req.body.gender,
    birthday: req.body.birthday,
    country: req.body.country,
    address: req.body.address,
    phone: req.body.phone,

  };
  console.log("============================", req.params.id);
  User.findByIdAndUpdate(req.params.id, updates, (err) => {
    if (err) {
      console.log('error');
      return res.status(400).json({
        message: "Unable to update User",
        err
      });
    } else {
      res.json({
        message: 'User updated successfully'
      });
    }
  });
};

exports.logOut = function(req, res, next) {
  console.log("he llegado a logout");
  req.logout();
  res.status(200).json({
    message: 'Success'
  });
};

exports.logStill = function(req, res, next) {
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }

  res.status(403).json({
    message: 'Unauthorized'
  });
};


exports.private = function(req, res, next) {
  if (req.isAuthenticated()) {
    res.json({
      message: 'This is a private message'
    });
    return;
  }

  res.status(403).json({
    message: 'Unauthorized'
  });
};

exports.removeUser = function(req, res) {
  User.findByIdAndRemove(req.params.id)
    .then((list) => res.status(202).json({
      message: 'user removed successfully'
    }))
    .catch(err => res.status(500).json({
      message: 'impossible to remove the user',
      error: err
    }));
};
