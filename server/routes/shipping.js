const { submitShipping } = require("../Controller/Shipping");

const router = require("express").Router();

router.post('/:id', submitShipping)

module.exports = router