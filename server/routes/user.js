const { createUser } = require('../Controller/User')

const router = require('express').Router()
//Create User
router.post('/register', createUser)

module.exports = router