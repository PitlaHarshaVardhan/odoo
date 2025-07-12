const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  points: { type: Number, default: 0 },
  role: { type: String, default: "user" },
});
module.exports = mongoose.model("User", userSchema);
