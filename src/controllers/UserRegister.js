const User = require("../models/User");
const bcrypt = require("bcryptjs")

const userRegister = async (req, res) => {
  const { email, password } = req.body;
  const errors = [];
  if (!email || !password) {
    errors.push({ message: "all fields are required" });
  }
  if (errors.length > 0) {
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
      res.redirect("user/register")
    })

};
module.exports = userRegister