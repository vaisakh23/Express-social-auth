const router = require("express").Router();
const authRouter = require("./auth");
const fbRouter = require("./fbAuth");
const welcomeRouter = require("./welcome");

router.use("/user", authRouter);
router.use("/user", fbRouter);
router.use("/", welcomeRouter);
module.exports = router;
