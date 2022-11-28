const Food = require("../Model/Food");

const createFood = async (req, res, next) => {
    try {
        const existFood = await Food.find({ name: req.body.name });
        if (existFood.length === 0 || existFood == []) {
            const newFood = new Food(req.body);
            try {
                const saveFood = await newFood.save();
                res.status(200).json({
                    message: "Succes",
                    data: saveFood,
                });
            } catch (err) {
                next(err);
            }
        } else {
            res.status(200).json({
                message: "Data is available",
            });
        }
    } catch (err) {
        next(err);
    }
};

const filterFood = async (req, res, next) => {
    const minPrice = 0;
    const maxPrice = req.query.max === "" ? 1000000 : req.query.max;
    const category = req.query.category === undefined ? "" : req.query.category.split(",");
    const orderby = req.query.orderby === "" ? "name" : req.query.orderby;
    const asc = req.query.asc == "asc" ? 1 : -1;
    try {
        const findedFood = await Food.find({
            $or:
                [{ category: { $all: category } },
                { price: { $gte: minPrice, $lte: maxPrice } }],
        }).sort([[`${orderby}`, asc]]);

        res.status(200).json({
            message: "Succes",
            data: findedFood,
        });
    } catch (err) {
        next(err);
    }
};

const getCategory = async (req, res, next) => {
    try {
        console.log('masuk')
        const getCategory = await Food.find()
        let newcategory = []
        getCategory.forEach(iter => {
            iter.category.forEach(item => {
                if (!newcategory.includes(item)) {
                    newcategory.push(item)
                }
            })
        })
        res.status(200).json({
            message: 'Succes',
            data: newcategory
        })
    } catch (err) {
        next(err)
    }
}

const getFoodbyId = async (req, res, next) => {
    try {
        const getData = await Food.findById(req.params.id);
        res.status(200).json({
            message: "Succes",
            data: getData,
        });
    } catch (err) {
        next(err);
    }
};

module.exports = { createFood, filterFood, getFoodbyId, getCategory };
