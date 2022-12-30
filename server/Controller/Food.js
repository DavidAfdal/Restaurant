const Food = require("../Model/Food");
const cloudinary = require("../util/cloudinary");

const createFood = async (req, res, next) => {
  let images = [...req.files];
  let uploadImage = [];
  try {
    const existFood = await Food.find({ name: req.body.name });
    if (existFood.length === 0 || existFood == []) {
      for (let i = 0; i < images.length; i++) {
        const result = await cloudinary.uploader.upload(images[i].path);
        uploadImage.push({
          _id: result.public_id,
          url: result.url,
        });
      }
      const newFood = new Food({
        name: req.body.name,
        price: req.body.price,
        rating: req.body.rating,
        desc: req.body.desc,
        category: req.body.category,
        review: req.body.review,
        photos: uploadImage,
      });
      console.log(newFood);
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
  const maxPrice = req.query.max || 1000000;
  const page = parseInt(req.query.page) - 1 || 0;
  const search = req.query.search || "";
  const limit = parseInt(req.query.limit) || 5;
  let category = req.query.category || "All";
  const orderby = req.query.orderby || "name";
  const asc = req.query.asc === "Newest" ? 1 : -1;

  let newcategory = [];

  try {
    const getCategory = await Food.find();
    getCategory.forEach((categorys) => {
      categorys.category.forEach((category) => {
        if (!newcategory.includes(category)) {
          newcategory.push(category);
        }
      });
    });
  } catch (error) {
    next(error);
  }

  category === "All" ? (category = newcategory) : (category = req.query.category.split(","));

  console.log(category);
  try {
    const findedFood = await Food.find({
      category: { $in: category },
      price: { $gte: minPrice, $lte: maxPrice },
      name: { $regex: search, $options: "i" },
    })
      .sort([[`${orderby}`, asc]])
      .skip(page * limit)
      .limit(limit);

    const total = await Food.countDocuments({
      category: { $in: category },
      price: { $gte: minPrice, $lte: maxPrice },
      name: { $regex: search, $options: "i" },
    });

    res.status(200).json({
      message: "Succes",
      payload: {
        totalMenu: total,
        totalPage: Math.ceil(total / limit),
        page: page + 1,
        category,
        data: findedFood,
      },
    });
  } catch (err) {
    next(err);
  }
};

const getCategory = async (req, res, next) => {
  try {
    const getCategory = await Food.find();
    let newcategory = [];
    getCategory.forEach((categorys) => {
      categorys.category.forEach((category) => {
        if (!newcategory.includes(category)) {
          newcategory.push(category);
        }
      });
    });
    res.status(200).json({
      message: "Succes",
      data: newcategory,
    });
  } catch (err) {
    next(err);
  }
};

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
