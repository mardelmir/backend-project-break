const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')

router.get('/login', authController.getLoginForm)
router.post('/login', authController.loginEmailPassword)
router.get('/register', authController.getRegisterForm)
router.post('/register', authController.createAccount)
router.post('/logout', authController.logout)

module.exports = router