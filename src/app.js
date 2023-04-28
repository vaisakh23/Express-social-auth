const express = require("express");
const { engine, create } = require("express-handlebars");
const session = require("express-session");
const flash = require("connect-flash");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

require("dotenv").config();
require("./db");

app = express();
app.set("views", __dirname + "/views");

const hbs = create({
  layoutsDir: __dirname + "/views",
  partialsDir: __dirname + "/views/partials",
  defaultLayout: "layout",
  extname: ".hbs",
});
app.set("view engine", ".hbs");
app.engine(".hbs", hbs.engine);
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg")
  res.locals.error_msg = req.flash("error_msg")
  next()
})

app.use("/", indexRouter);
app.use("/user", usersRouter);

// app.use("/test", async (req, res) => {
//     const result = await hbs.renderView(req.app.get("views") + "/welcome.hbs")
//     res.send(result)
// })

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server started on port ${3000}`));
