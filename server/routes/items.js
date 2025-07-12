// server/routes/items.js
const express = require("express");
const router = express.Router();
const Item = require("../models/Item");
const auth = require("../middlewares/authMiddleware");

router.get("/all", async (req, res) => {
  const items = await Item.find().populate("uploader", "email");
  res.json(items);
});

router.delete("/delete/:id", auth, async (req, res) => {
  const item = await Item.findById(req.params.id);
  if (!item) return res.status(404).send("Item not found");
  if (item.uploader.toString() !== req.user.userId)
    return res.status(403).send("Unauthorized");
  await Item.findByIdAndDelete(req.params.id);
  res.send("Item deleted");
});

module.exports = router;
