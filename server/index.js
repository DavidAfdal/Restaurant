const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const bodyParser = require('body-parser')


const foodRouter = require('./routes/food')
const reviewRouter = require('./routes/review')

const app = express()
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
    } catch (error) {
        throw error;
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB is disconnected")
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//router
app.use('/food', foodRouter)
app.use('/review', reviewRouter)


app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || 'Something went Wrong'
    return res.status(errorStatus).json({
        succes: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})


app.listen(3000, () => {
    connect()
    console.log("connect to backend")
})