const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    name: {
        type: String,
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
    photos: {
        type: String,
    },
    job: {
        type: String,
        required: true
    }

}, { timestamps: true })

module.exports = mongoose.model("Review", reviewSchema)