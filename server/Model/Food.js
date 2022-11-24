const mongoose = require('mongoose')


const HotelSchema = new mongoose.Schema({
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
    image: {
        type: [string],
        required: true
    },
    photos: {
        type: [String],
    },
    category: {
        type: [String],
        default: false
    },
    review: {
        type: [String],
        default: false
    }
})

module.exports = mongoose.model("Hotel", HotelSchema)