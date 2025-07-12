const mongoose = require("mongoose");
const itemSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  size: String,
  condition: String,
  tags: [String],
  images: [String],
  status: { type: String, default: "pending" },
  uploader: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});
module.exports = mongoose.model("Item", itemSchema);
