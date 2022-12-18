
const router = require("express").Router();
const { createReview, showReview } = require("../Controller/Review");
const upload = require('../util/multer')

router.post('/add', upload.single('photos'), createReview)
router.get('/', showReview)

module.exports = router;
