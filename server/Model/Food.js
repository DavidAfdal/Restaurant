const mongoose = require('mongoose')


const FoodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
    },
    desc: {
        type: String,
        required: true
    },
    category: {
        type: [String],
        default: false
    },
    review: {
        type: [String],
        default: false
    },
}, { timestamps: true })

module.exports = mongoose.model("Food", FoodSchema)