const express = require("express");
const userRegister = require("../controllers/UserRegister");
const userLogin = require("../controllers/UserLogin");
const router = express.Router();

router.get("/register", (req, res) => {
  res.render("register");
});
router.post("/register", userRegister);

router.get("/login", (req, res, next) => {
  res.render("login");
});
router.post("/login", userLogin);

router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      console.log(err);
    } else {
      req.flash("error_msg", "logout successfull");
      return res.redirect("/user/login");
    }
  });
});
module.exports = router;
