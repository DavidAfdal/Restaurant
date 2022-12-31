const { createDiscount, getDiscount } = require('../Controller/Discount')

const router = require('express').Router()

router.post('/create', createDiscount)
router.get('/', getDiscount)

module.exports = router