const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, required: true},
    password: {type: String},
    createdDate: {type: Date, default: Date.now},
    provider: String,
    providerUserId: String,
});

const User = mongoose.model("User", userSchema)
module.exports = User