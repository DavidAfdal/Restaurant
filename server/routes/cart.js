const { addtoCart } = require("../Controller/Cart");

const router = require("express").Router();
const upload = require('../util/multer')

router.post('/add/:userID/:foodId', addtoCart)

module.exports = router;
