const express = require("express");
const flash = require("connect-flash");
const InitialisePassport = require("./passport");
const InitialiseHandlebars = require("./handlebars");
const indexRouter = require("./routes/welcome");
const usersRouter = require("./routes/auth");

require("dotenv").config();
require("./db");

app = express();
InitialisePassport(app);
InitialiseHandlebars(app);
app.set("views", __dirname + "/views");
app.use(express.urlencoded({ extended: true }));

app.use(flash());
app.use((req, res, next) => {
  res.locals.errors = []
  const errors = req.flash()
  for(err in errors) {
    if (err) {
      res.locals.errors.push(errors[err])
    }
  }
  next();
});

app.use("/", indexRouter);
app.use("/user", usersRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server started on port ${3000}`));
