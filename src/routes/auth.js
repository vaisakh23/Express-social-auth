const express = require("express");
const userRegister = require("../controllers/UserRegister");
const userLogin = require("../controllers/UserLogin")
const router = express.Router();

router.get("/register", (req, res) => {
  res.render("register");
});
router.post("/register", userRegister);
router.get("/login", userLogin);
module.exports = router;
