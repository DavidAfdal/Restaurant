const Food = require('../Model/Food')
const { createError } = require('../util/err')

const createFood = async (req, res, next) => {
    const existFood = await Food.find({ name: req.body.name })
    if (existFood.length == 0) {
        const newFood = new Food(req.body)
        try {
            const saveFood = await newFood.save()
            res.status(200).json({
                message: 'Succes',
                data: saveFood
            })
        } catch (err) {
            next(err)
        }
    }
}

const getFoodbyId = async (req, res, next) => {
    try {
        const getData = await Food.findById(req.params.id)
        res.status(200).json({
            message: 'Succes',
            data: getData
        })
    } catch (err) {
        next(err)
    }
}

const filterFood = async (req, res, next) => {
    const maxPrice = req.query.max === '' ? 1000000 : req.query.max
    const minPrice = req.query.min === '' ? 0 : req.query.min
    const category = req.query.category === '' ? '' : req.query.category
    const asc = req.query.asc === 'asc' ? 1 : -1
    try {
        const findedHotel = await Hotel.find({ category: { "$in": [category] } }, { price: { $lte: maxPrice, $gte: minPrice } }).sort({ name: asc })
        res.status(200).json({
            message: 'Succes',
            data: findedHotel
        })
    }catch(err){
        next(err)
    }
}
module.exports = { createFood }