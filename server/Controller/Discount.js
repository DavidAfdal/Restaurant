const Discount = require('../Model/Discount')

const createDiscount = async (req, res, next) => {
    try {
        const createDisc = await new Discount(req.body).save()
        res.status(200).json({
            message: 'Succes',
            data: createDisc
        })
    } catch (err) {
        next(err)
    }
}

const getDiscount = async (req, res, next) => {
    try {
        const getDiscount = await Discount.find()
        res.status(200).json({
            message: "Succes",
            data: getDiscount
        })
    } catch (err) {
        next(err)
    }
}

module.exports = { createDiscount,getDiscount }