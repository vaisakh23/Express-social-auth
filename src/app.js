const express = require("express");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

app = express();
// routes
app.use("/", indexRouter);
app.use("/user", usersRouter);

app.listen(3000, () => console.log('server started'))