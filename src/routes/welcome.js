const express = require("express");
const { IsAuthenticatedUser } = require("../middlewares/IsAuthenticatedUser");


const router = express.Router();

router.get("/", IsAuthenticatedUser, (req, res) => {
  return res.render("welcome");
});

module.exports = router;
