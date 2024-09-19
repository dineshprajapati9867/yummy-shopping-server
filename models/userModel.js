const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  resetPasswordOTP: { type: Number },
  resetPasswordExpires: { type: Date },
});

module.exports = mongoose.model("User", userSchema);
