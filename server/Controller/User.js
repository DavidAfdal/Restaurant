const User = require("../model/User");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");

const createUser = async (req, res, next) => {
  const { email, username, password } = req.body;
  try {
    const exitingUser = await User.findOne({ email: email });
    if (!exitingUser) {
      try {
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);

        //save data
        const newUser = await new User({
          username: username,
          email: email,
          password: hash,
        }).save();

        //sendemail
        let mailTransporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "bagastester46@gmail.com",
            pass: "nhvrhffzwrdxicqe",
          },
        });

        let mailDetails = {
          from: "bagastester46@gmail.com",
          to: req.body.email,
          subject: "Test mail",
          html: `<p>Click <a href="http://localhost:3000/user/actived/${newUser._id}">here</a> to active your email</p>`,
        };

        await mailTransporter.sendMail(mailDetails, function (err, data, next) {
          if (err) {
            next(err);
          } else {
            const { username, email, _id, ...otherDetails } = newUser._doc;
            res.status(200).json({
              message: "Please Check Your email to activated Account",
              data: {
                _id: _id,
                username: username,
                email: email,
              },
            });
          }
        });
      } catch (err) {
        next(err);
      }
    } else {
      if (exitingUser.isActived === false) {
        return res.status(200).json({
          error: "User exits alredy, but not activated",
          data: [],
        });
      } else {
        return res.status(200).json({
          error: "User exits alredy, please login instead",
          data: [],
        });
      }
    }
  } catch (err) {
    next(err);
  }
};

const activeUser = async (req, res, next) => {
  try {
    const findUser = await User.findByIdAndUpdate(req.params.id, { isActived: true }, { new: true });
    res.status(200).json({
      message: "your email already active",
    });
  } catch (err) {
    next(err);
  }
};

const userLogin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const identifiedUser = await User.findOne({ email: email });
    if (!identifiedUser) {
      return res.status(200).json({
        error: "Email doesn`t existing",
      });
    }
    const comparePassword = await bcrypt.compare(password, identifiedUser.password);
    if (comparePassword) {
      if (identifiedUser.isActived === false) {
        let mailTransporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "bagastester46@gmail.com",
            pass: "nhvrhffzwrdxicqe",
          },
        });

        let mailDetails = {
          from: "bagastester46@gmail.com",
          to: req.body.email,
          subject: "Reactive Email",
          html: `<p>Click <a href="http://localhost:3000/user/actived/${identifiedUser._id}">here</a> to active your email</p>`,
        };

        await mailTransporter.sendMail(mailDetails, function (err, data, next) {
          if (err) {
            next(err);
          } else {
            res.status(202).json({
              error: "Please Check Your email to activated Account",
            });
          }
        });
      } else {
        const { username, email, _id, ...otherDetails } = identifiedUser._doc;
        res.status(200).json({
          message: "Succes Login",
          data: {
            _id: _id,
            username: username,
            email: email,
          },
        });
      }
    } else {
      res.status(200).json({
        message: "Please password doesn`t match",
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { createUser, userLogin, activeUser };
