const { createUser, userLogin, activeUser } = require("../Controller/User");

const router = require("express").Router();
//Create User
router.post("/register", createUser);
router.get("/actived/:id", activeUser)

router.post("/login", userLogin);

module.exports = router;
