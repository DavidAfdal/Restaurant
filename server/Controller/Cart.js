const Cart = require("../Model/Cart");
const Food = require("../Model/Food");
const User = require("../Model/User");

const addtoCart = async (req, res, next) => {
  const userID = req.params.userID;
  const foodId = req.params.foodId;
  try {
    const findUser = await User.findById(userID);
    if (findUser.cart_id == "0") {
      const newCart = await new Cart({
        food: [
          {
            food_id: foodId,
            total_food: req.body.total_food,
            total_price: req.body.total_price,
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
        next();
      }
    } else {
      try {
        const getCart = await Cart.findById(findUser.cart_id);
        let gt;
        let findFoodId = getCart.food.find((food) => food.food_id === foodId);
        findFoodId === undefined ? (findFoodId = null) : (findFoodId = findFoodId);
        if (findFoodId != null && findFoodId.food_id === foodId) {
          try {
            let newTotalFood = findFoodId.total_food + req.body.total_food;
            let newTotalprice = findFoodId.total_price + req.body.total_price;
            gt = await Cart.findOneAndUpdate(
              { _id: findUser.cart_id, "food.food_id": foodId },
              {
                $set: {
                  "food.$.total_food": newTotalFood,
                  "food.$.total_price": newTotalprice,
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
            gt = await Cart.findOneAndUpdate(
              { _id: findUser.cart_id },
              {
                $push: {
                  food: {
                    food_id: foodId,
                    total_food: req.body.total_food,
                    total_price: req.body.total_price,
                  },
                },
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
};

const getCartbyID = async (req, res, next) => {
  try {
    const findUser = await User.findById(req.params.id);
    try {
      const getCart = await Cart.findById(findUser.cart_id);
      res.status(200),
        json({
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
module.exports = { addtoCart, getCartbyID };
