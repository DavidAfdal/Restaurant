const { addtoCart, updateCart, getCartbyID, deleteCart } = require("../Controller/Cart");

const router = require("express").Router();
const upload = require("../util/multer");

router.post("/add/:userID/:foodId", addtoCart);
router.post("/delete/:id/:foodId", deleteCart);
router.post("/update/:userID", updateCart);
router.get("/:id", getCartbyID);
module.exports = router;
