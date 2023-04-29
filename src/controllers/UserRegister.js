const User = require("../models/User");
const bcrypt = require("bcryptjs")

const userRegister = async (req, res) => {
  const { email, password } = req.body;
  const errors = [];
  if (!email || !password) {
    req.flash("error_msg", "all fields are required")
    return res.render("register", {
      errors,
      email,
      password,
    });
  }
  const passwordHash = await bcrypt.hash(password, 10)
  User({email: email, password: passwordHash}).save()
    .then((_) => {
      req.flash("success_msg", "account created succesfully")
      return res.redirect("/user/login");
    })
    .catch((err) => {
      req.flash("error_msg", "account creation failed")
      res.redirect("/user/register")
    })

};
module.exports = userRegister