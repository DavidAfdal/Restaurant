const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")


const foodRouter = require('./routes/food')


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

app.use(express.json())
app.use('/food',foodRouter)


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