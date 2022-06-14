const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  avatar: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  }, // end of name
  email: {
    type: String,
    required: true,
    unique: true,
  }, // end of email
  password: {
    type: String,
    required: true,
  }, // end of password
}); // end of userSchema

exports.module = mongoose.model("User", userSchema);
