const User = require("../../models/User");
const bcrypt = require("bcryptjs");

const LocalAuth = async (email, password, done) => {
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return done(null, false, { message: "Invalid username" });
    }
    const result = await bcrypt.compare(password, user.password);
    if (!result) {
      return done(null, false, { message: "Invalid password" });
    }
    return done(null, user);
  } catch (_) {
    return done(null, false, { message: "Invalid username or password" });
  }
};
module.exports = LocalAuth;
