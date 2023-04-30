const userLogout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      console.log(err);
    } else {
      req.flash("error_msg", "logout successfull");
      return res.redirect("/user/login");
    }
  });
};
module.exports = userLogout;
