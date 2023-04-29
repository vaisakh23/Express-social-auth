const { engine, create } = require("express-handlebars");

const InitialiseHandlebars = (app) => {
  const hbs = create({
    layoutsDir: __dirname + "/../views",
    partialsDir: __dirname + "/../views/partials",
    defaultLayout: "layout",
    extname: ".hbs",
  });
  app.set("view engine", ".hbs");
  app.engine(".hbs", hbs.engine);
};
module.exports = InitialiseHandlebars;
