const passport = require("passport");
const session = require("express-session");
const LocalStrategy = require("passport-local");
const LocalAuth = require("./utils/LocalAuth");

const InitialisePassport = (app) => {
  app.use(
    session({
      secret: "secret",
      resave: true,
      saveUninitialized: true,
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  passport.use(new LocalStrategy({ usernameField: "email" }, LocalAuth));

  passport.serializeUser((user, done) => {
    process.nextTick(() => {
      done(null, user);
    });
  });
  passport.deserializeUser((user, done) => {
    process.nextTick(() => {
      return done(null, user);
    });
  });
};
module.exports = InitialisePassport;
