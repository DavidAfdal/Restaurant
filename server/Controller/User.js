const User = require("../model/User");

const createUser = async (req, res, next) => {
  try {
    const newUser = await new User(req.body).save();

    res.status(200).json({
      message: "Succes",
      data: newUser,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { createUser };
