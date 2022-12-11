const { find } = require('../Model/Food')
const review = require('../Model/Review')
const cloudinary = require('../util/cloudinary')

const createReview = async (req, res, next) => {
    let defaultPic = ""
    console.log(req.file)
    if (req.file !== "" && req.file !== undefined) {
        try {
            const result = await cloudinary.uploader.upload(req.file.path);
            console.log(result)
            defaultPic = result.url
        } catch (err) {
            next(err)
        }
    } else {
        defaultPic = "https://res.cloudinary.com/disopski9/image/upload/v1670763047/test_sqbtai.png"
    }

    const newReview = new review({
        name: req.body.name,
        rating: req.body.rating,
        desc: req.body.desc,
        photos: defaultPic,
        job: req.body.job,
    })
    try {
        const saveReview = await newReview.save()
        res.status(200).json({
            message: "Succes",
            data: saveReview
        })
    } catch (err) {
        next(err)
    }
}

const showReview = async (req, res, next) => {
    try {
        const getReview = await review.find({
            rating: {
                $gt: 3
            }
        }).sort({createdAt: 1}).limit(5)
        res.status(200).json({
            message: 'succes',
            data: getReview
        })
    } catch (err) {
        next(err)
    }
}

module.exports = { createReview, showReview }