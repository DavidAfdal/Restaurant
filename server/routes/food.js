const { createFood, getFoodbyId, filterFood } = require('../Controller/Food')
const router = require('express').Router()

router.post('/add', createFood)
router.get('/search', filterFood)
router.get('/:id', getFoodbyId)


module.exports = router