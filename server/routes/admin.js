// server/routes/admin.js
const express = require("express");
const router = express.Router();
const Item = require("../models/Item");
const auth = require("../middlewares/authMiddleware");

router.post("/approve/:id", auth, async (req, res) => {
  const item = await Item.findById(req.params.id);
  if (!item) return res.status(404).send("Item not found");
  item.status = "approved";
  await item.save();
  res.send("Item approved");
});

router.post("/reject/:id", auth, async (req, res) => {
  const item = await Item.findById(req.params.id);
  if (!item) return res.status(404).send("Item not found");
  item.status = "rejected";
  await item.save();
  res.send("Item rejected");
});

module.exports = router;
