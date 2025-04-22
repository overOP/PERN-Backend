const express = require('express')
const router = express.Router()
const SignUp = require('../controller/SignUp')
const Login = require('../controller/Login')
const dataApi = require('../controller/dataApi')
//SignUp
router.post('/signUp', SignUp)
//Login
router.post('/login', Login)
//Data API
router.get('/dataApi', dataApi)

module.exports = router