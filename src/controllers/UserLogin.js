const passport = require("passport");

const userLogin = (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/user/login",
    failureFlash: true,
    successFlash: true,
  })(req, res, next);
};
module.exports = userLogin;
