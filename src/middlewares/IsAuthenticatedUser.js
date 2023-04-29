const IsAuthenticatedUser = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash("error_msg", "please login to access this page");
    return res.redirect("/user/login");
  }
  next();
};
module.exports = { IsAuthenticatedUser }