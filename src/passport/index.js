const passport = require("passport");
const session = require("express-session");
const LocalStrategy = require("passport-local");
const FacebookStrategy = require("passport-facebook")
const LocalAuth = require("./utils/LocalAuth");
const FacebookAuth = require("./utils/FacebookAuth");

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
  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: '/user/auth/facebook/callback',
        profileFields: ['id', 'emails', 'name'],
        passReqToCallback: true
      },
      FacebookAuth
    )
  );

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
