const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    shipping_id: {
      type: String,
      required: true,
    },
    cart_id: {
      type: String,
      required: true,
    },
    sub_total: {
      type: Number,
    },
    shipping: {
      type: Number,
    },
    discount: {
      type: Number,
    },
    tax: {
      type: Number,
    },
    total: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
