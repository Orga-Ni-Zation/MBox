const passport      = require("passport");
const User =  require('../models/User');
const FbStrategy = require('passport-facebook').Strategy;
const path = require('path');

module.exports = function (passport) {
  passport.use(new FbStrategy({
  clientID: "2154216471471670",
  clientSecret: "24ce611d4ab1fe8e3d1c428d49382997",
  callbackURL: "http://localhost:3000/api/auth/facebook/user",
  profileFields: ['user_friends', 'manage_pages']
  }, (accessToken, refreshToken, profile, done) => {
  console.log(accessToken);
  User.findOne({ provider_id: profile.id }, (err, user) => {
    if (err) {
      return done(err);
    }
    if (user) {
      return done(null, user);
    }

    const newUser = new User({
      name: profile.displayName,
      email: profile.emails[0].value,
    });

    newUser.save((err) => {
      if (err) {
        return done(err);
      }
      debug(newUser);
      done(null, newUser);
    });
  });


}));

}
