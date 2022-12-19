const express = require('express')
const router = express.Router()
const {getDashboard, setDashboard, updateDashboard, deleteDashboard} = require('../controllers/dashboardController')
const { protect } = require('../middleware/authMiddleware')

//  router.route('/').get(getDashboard).post(setDashboard)
//  router.route('/:id').delete(deleteDashboard).put(updateDashboard)

router.get('/', protect, getDashboard)

router.post('/', protect,  setDashboard)

router.put('/:id', protect, updateDashboard)

router.delete('/:id', protect, deleteDashboard)


module.exports = router