const express = require("express");
const { engine } = require("express-handlebars");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

require("dotenv").config();

app = express();
app.set("views", __dirname + "/views");

// view engine
app.set("view engine", ".hbs");
app.engine(".hbs", engine({
    layoutsDir: __dirname + "/views",
    defaultLayout: "layout",
    extname: ".hbs"
}));

// routes
app.use("/", indexRouter);
app.use("/user", usersRouter);

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`server started on port ${3000}`));