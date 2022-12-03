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
        min: 0,
        max: 5
    },
    desc: {
        type: String,
        required: true
    },
    // image: {
    //     type: [String],
    //     required: true
    // },
    // photos: {
    //     type: [String],
    // },
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