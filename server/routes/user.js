const { createUser, userLogin } = require("../Controller/User");

const router = require("express").Router();
//Create User
router.post("/register", createUser);
router.post("/login", userLogin);

module.exports = router;
