const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: [true, "User is already existed"],
    },
    password: String,
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
