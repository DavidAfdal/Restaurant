const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    food: [
      {
        food_id: { type: String },
        total_food: { type: Number },
        total_price: { type: Number },
        photos: { type: String },
      },
    ],
    total_price_cart: {
      type: Number,
    },
    status_cart: {
      type: String,
      default: "On Cart",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
