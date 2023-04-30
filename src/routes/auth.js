const express = require("express");
const userRegister = require("../controllers/UserRegister");
const userLogin = require("../controllers/UserLogin");
const userLogout = require("../controllers/UserLogout");
const router = express.Router();

router.get("/register", (req, res) => {
  res.render("register");
});
router.post("/register", userRegister);

router.get("/login", (req, res, next) => {
  res.render("login");
});
router.post("/login", userLogin);

router.get("/logout", userLogout);
module.exports = router;
