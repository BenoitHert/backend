const express = require('express')
const router = express.Router()
const {getMenu, setMenu, updateMenu, deleteMenu} = require('../controllers/menuController')

//  router.route('/').get(getMenu).post(setMenu)
//  router.route('/:id').delete(deleteMenu).put(updateMenu)

router.get('/', getMenu)

router.post('/', setMenu)

router.put('/:id', updateMenu)

router.delete('/:id', deleteMenu)




module.exports = router