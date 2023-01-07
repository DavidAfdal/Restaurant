const { createFood, getFoodbyId, filterFood, getCategory } = require("../Controller/Food");
const router = require("express").Router();
const upload = require("../util/multer");

router.post("/add", upload.array("photos", 5), createFood);
router.get("/search", filterFood);
router.get("/category", getCategory);
router.get("/:id", getFoodbyId);

module.exports = router;
