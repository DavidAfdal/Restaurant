const { createFood, getFoodbyId, filterFood, getCategory } = require('../Controller/Food')
const router = require('express').Router()

router.post('/add', createFood)
router.get('/search', filterFood)
router.get('/:id', getFoodbyId)
router.get('/category', getCategory)

module.exports = router