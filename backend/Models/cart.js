const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    productUrl: String,
    productId: String,
    name: String,
    qty: Number,
    price: Number,
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
