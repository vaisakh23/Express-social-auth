const express = require("express");
const userRegister = require("../controllers/UserRegister");
const router = express.Router();

router.get("/register", (req, res) => {
  res.render("register");
});
router.post("/register", userRegister);
router.get("/login", (req, res) => {
  res.render("login");
});
module.exports = router;
