const User = require("../../models/User");

const FacebookAuth = async (accessToken, refreshToken, profile, done) => {
  if (!profile._json.email) {
    return done(null, false, {
      message:
        "Facebook Account is not registered with email. Please sign in using other methods",
    });
  }
  User({
    email: profile._json.email,
    provider: profile.provider,
    providerUserId: profile.id,
  })
    .save()
    .then((user) => {
      return done(null, user, { message: "account created succesfully" });
    })
    .catch((err) => {
      return done(err, false, { message: "account creation failed" });
    });
};
module.exports = FacebookAuth;
