const mongoose = require('mongoose')


const imageSchema = new mongoose.Schema({
    imageId: {
        type: String,
    },
    photos: {
        type: String,
    },

}, { timestamps: true })

module.exports = mongoose.model("imageFood", imageSchema)