const mongoose = require("mongoose");

const discountSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    max: 12,
    min: 4,
  },
  discount: {
    type: Number,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
});
module.exports = mongoose.model("Discount", discountSchema);
