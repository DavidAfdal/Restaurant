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

const loginUser = async (req, res, next) => {
  try {
    const loginUser = await User.findOne(
      { email: req.body.email })
    if (loginUser.password == req.body.password) {
      res.status(200).json({
        message: "Succes",
        data: loginUser
      })
    } else {
      res.status(200).json({
        message: "Succes",
        data: "Password dont match"
      })
    }
  } catch (err) {
    next(err)
  }
}

module.exports = { createUser, loginUser };