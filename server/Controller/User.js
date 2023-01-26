const User = require("../model/User");

const createUser = async (req, res, next) => {
  let exitingUser;

  const { email, username, password } = req.body;

  try {
    exitingUser = await User.findOne({ email: email });
  } catch (error) {
    next(error);
  }

  if (exitingUser) {
    return next(new Error("User exits alredy, please login instead"));
  }

  try {
    const newUser = await new User(username, email, password).save();
    res.status(201).json({
      message: "Succes",
      data: newUser,
    });
  } catch (err) {
    next(err);
  }
};

const userLogin = async (req, res, next) => {
  const { email, password } = req.body;

  let identifiedUser;
  try {
    identifiedUser = await User.findOne({ email: email });
  } catch (error) {
    next(error);
  }

  if (!identifiedUser) {
    const errorMessage = new Error("Akun tidak terdaftar");
    return next(errorMessage);
  }

  if (password != identifiedUser?.password) {
    const errorMessage = new Error("Password tidak sesuai");
    return next(errorMessage);
  }

  res.status(200).json({
    message: "sucees",
    data: identifiedUser,
  });
};

module.exports = { createUser, userLogin };
