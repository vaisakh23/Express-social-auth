const express = require("express");
const flash = require("connect-flash");
const InitialisePassport = require("./passport");
const InitialiseHandlebars = require("./handlebars");
const routes = require("./routes")

require("dotenv").config();
require("./db");

app = express();
InitialisePassport(app);
InitialiseHandlebars(app);
app.set("views", __dirname + "/views");
app.use(express.urlencoded({ extended: true }));

app.use(flash());
app.use((req, res, next) => {
  res.locals.errors = req.flash()
  next();
});

app.use("/", routes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server started on port ${3000}`));
