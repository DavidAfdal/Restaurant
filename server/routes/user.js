const { createUser, loginUser } = require('../Controller/User')

const router = require('express').Router()
//Create User
router.post('/register', createUser)
router.post('/login',loginUser)

module.exports = router