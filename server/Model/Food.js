const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    long_desc: {
      type: String,
      required: true,
    },
    short_desc: {
      type: String,
      required: true,
    },
    photos: [
      {
        _id: { type: String },
        url: { type: String },
      },
    ],
    category: {
      type: [String],
      default: false,
    },
    review: {
      type: [String],
      default: false,
    },
    quantity: {
      type: Number,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Food", FoodSchema);
