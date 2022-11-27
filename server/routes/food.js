const { createFood, getFoodbyId, filterFood, getCategory } = require("../Controller/Food");
const router = require("express").Router();

router.post("/add", createFood);
router.get("/search", filterFood);
router.get("/category", getCategory);
router.get("/:id", getFoodbyId);

module.exports = router;
