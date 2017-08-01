const FbStrategy = require('passport-facebook').Strategy;
const User = require('../models/User');
const passport = require('passport');
const path = require('path');

const authRoutes = express.Router();

passport.serializeUser((loggedInUser, cb) => {
  cb(null, loggedInUser._id);
});

passport.deserializeUser((userIdFromSession, cb) => {
  User.findById(userIdFromSession, (err, userDocument) => {
    if (err) {
      cb(err);
      return;
    }

    cb(null, userDocument);
  });
});
