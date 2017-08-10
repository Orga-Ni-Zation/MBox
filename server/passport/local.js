const LocalStrategy = require('passport-local').Strategy;
const User = require('../api/User/UserModel');
const bcrypt = require('bcrypt');

module.exports = function (passport) {
  passport.use(new LocalStrategy((username, password, next) => {
    User.findOne({ username }, (err, foundUser) => {
      if (err)
        return next(err);

      if (!foundUser)
        return next(null, false, { message: 'Incorrect username' });

      if (!bcrypt.compareSync(password, foundUser.password))
        return next(null, false, { message: 'Incorrect password' });

      return next(null, foundUser);
    });
  }));

  passport.serializeUser((loggedInUser, cb) => {
    return cb(null, loggedInUser._id);
  });

  passport.deserializeUser((userIdFromSession, cb) => {
    User.findById(userIdFromSession, (err, userDocument) => {
      if (err)
        return cb(err);

      return cb(null, userDocument);
    });
  });

};
