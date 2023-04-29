const express = require("express");
const { IsAuthenticatedUser } = require("../middlewares/IsAuthenticatedUser");


const router = express.Router();

router.get("/", IsAuthenticatedUser, (req, res) => {
  return res.render("welcome", { email: req.user.email });
});

module.exports = router;
