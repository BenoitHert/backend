const express = require('express')
const router = express.Router()
const {getShop, setShop, updateShop, deleteShop} = require('../controllers/shopController')
const {protect} = require('../middleware/authMiddleware')

router.get('/', protect, getShop)

router.post('/', protect, setShop)

router.put('/:id', protect, updateShop)

router.delete('/:id', protect, deleteShop)



module.exports = router
