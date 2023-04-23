const express = require("express");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
require("dotenv").config();

app = express();
// routes
app.use("/", indexRouter);
app.use("/user", usersRouter);

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`server started on port ${3000}`))