const express = require('express')
const router = express.Router()
const {getMenu, setMenu, updateMenu, deleteMenu} = require('../controllers/menuController')
const { protect } = require('../middleware/authMiddleware')


//  router.route('/').get(getMenu).post(setMenu)
//  router.route('/:id').delete(deleteMenu).put(updateMenu)

router.get('/', protect, getMenu)

router.post('/', protect, setMenu)

router.put('/:id', protect, updateMenu)

router.delete('/:id', protect, deleteMenu)




module.exports = router