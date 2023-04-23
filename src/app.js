const express = require("express");
const { engine, create } = require("express-handlebars");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

require("dotenv").config();

app = express();
app.set("views", __dirname + "/views");

const hbs = create({
  layoutsDir: __dirname + "/views",
  defaultLayout: "layout",
  extname: ".hbs",
});
app.set("view engine", ".hbs");
app.engine(".hbs", hbs.engine);
app.use(express.urlencoded({ extended: false }))

app.use("/", indexRouter);
app.use("/user", usersRouter);

// app.use("/test", async (req, res) => {
//     const result = await hbs.renderView(req.app.get("views") + "/welcome.hbs")
//     res.send(result)
// })

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server started on port ${3000}`));
