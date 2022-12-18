const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    cart_id: {
        type: String,
        default: '0'
    }
}, { timestamps: true })


module.exports =
    mongoose.models.User || mongoose.model('User', UserSchema);