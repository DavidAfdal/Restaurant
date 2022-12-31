const Cart = require("../Model/Cart");
const Food = require("../Model/Food");
const User = require("../Model/User");

const addtoCart = async (req, res, next) => {
  const userID = req.params.userID;
  const foodId = req.params.foodId;
  try {
    const foodFinder = await Food.findById(foodId);
    let photosFood = foodFinder.photos[0].url;
    console.log(photosFood);
    try {
      const findUser = await User.findById(userID);
      if (findUser.cart_id == "0") {
        try {
          const newCart = await new Cart({
            food: [
              {
                food_id: foodId,
                total_food: req.body.total_food,
                total_price: req.body.total_price,
                photos: photosFood,
              },
            ],
            total_price_cart: req.body.total_price,
          }).save();
          try {
            const updateUser = await User.findByIdAndUpdate(
              userID,
              {
                cart_id: newCart._id,
              },
              { new: true }
            );
            res.status(200).json({
              message: "Succes",
              data: newCart,
            });
          } catch (err) {
            next(err);
          }
        } catch (err) {
          next(err);
        }
      } else {
        try {
          const getCart = await Cart.findById(findUser.cart_id);
          let gt;
          let findFoodId = getCart.food.find((food) => food.food_id === foodId);
          findFoodId === undefined ? (findFoodId = null) : (findFoodId = findFoodId);
          if (findFoodId != null && findFoodId.food_id === foodId) {
            try {
              console.log("sama");
              let newTotalFood = findFoodId.total_food + req.body.total_food;
              let newTotalprice = findFoodId.total_price + req.body.total_price;
              gt = await Cart.findOneAndUpdate(
                { _id: findUser.cart_id, "food.food_id": findFoodId.food_id },
                {
                  $set: {
                    "food.$.food_id": findFoodId.food_id,
                    "food.$.total_food": newTotalFood,
                    "food.$.total_price": newTotalprice,
                    "food.$.photos": findFoodId.photos,
                    status_cart: "On Cart",
                  },
                  $inc: { total_price_cart: req.body.total_price },
                },
                { new: true }
              );
            } catch (err) {
              next(err);
            }
          } else {
            try {
              console.log("tidak sama");
              gt = await Cart.findOneAndUpdate(
                { _id: findUser.cart_id },
                {
                  $push: {
                    food: {
                      food_id: foodId,
                      total_food: req.body.total_food,
                      total_price: req.body.total_price,
                      photos: photosFood,
                    },
                  },
                  $set: { status_cart: "On Cart" },
                  $inc: { total_price_cart: req.body.total_price },
                },
                { new: true }
              );
            } catch (err) {
              next(err);
            }
          }
          res.status(200).json({
            message: "Succes",
            data: gt,
          });
        } catch (err) {
          next(err);
        }
      }
    } catch (err) {
      next(err);
    }
  } catch (err) {
    next(err);
  }
};
const updateCart = async (req, res, next) => {
  const userID = req.params.userID;
  try {
    const findUser = await User.findById(userID);
    try {
      await Cart.findByIdAndUpdate(
        findUser.cart_id,
        {
          $set: {
            food: [],
            total_price_cart: 0,
          },
        },
        { new: true }
      );
      try {
        let finalFood = [];
        let total_price_cart = 0;
        const arrayOfFood = req.body.food;
        for (let i = 0; i < arrayOfFood.length; i++) {
          let newFood = {
            food_id: arrayOfFood[i].food_id,
            total_food: arrayOfFood[i].total_food,
            total_price: arrayOfFood[i].total_price,
          };
          total_price_cart += arrayOfFood[i].total_price;
          finalFood.push(newFood);
        }
        const finalCart = await Cart.findByIdAndUpdate(
          findUser.cart_id,
          {
            $set: {
              food: finalFood,
              total_price_cart: total_price_cart,
              status_cart: "On Checkout",
            },
          },
          { new: true }
        );
        res.status(200).json({
          message: "succes",
          data: finalCart,
        });
      } catch (err) {
        next(err);
      }
    } catch (err) {
      next(err);
    }
  } catch (err) {
    next(err);
  }
};

const getCartbyID = async (req, res, next) => {
  try {
    const findUser = await User.findById(req.params.id);
    try {
      const getCart = await Cart.findById(findUser.cart_id);
      res.status(200).json({
        message: "Succes",
        data: getCart,
      });
    } catch (err) {
      next(err);
    }
  } catch (err) {
    next(err);
  }
};
module.exports = { addtoCart, getCartbyID, updateCart };
