const User = require("../models/User");

const userRegister = (req, res) => {
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
  User({email, password}).save()
    .catch((err) => console.log(err))

  return res.redirect("/user/login");
};
module.exports = userRegister