const mongoose = require("mongoose")

const userSchema = new mongoose.schema({
    name: String,
    email: {type: String, required: True},
    password: {type: String, required: True},
    date: {type: Date, default: Date.now}
});

const User = mongoose.model("User", userSchema)
module.exports = User