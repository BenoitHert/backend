const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getMe, updateMe, deleteMe } = require('../controllers/userController')
const {protect} = require('../middleware/authMiddleware')


router.post('/', registerUser)

router.post('/login', loginUser)

router.get('/me', protect, getMe)

router.put('/me', protect, updateMe)

router.delete('/me', protect, deleteMe)

module.exports = router