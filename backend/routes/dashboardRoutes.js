const express = require('express')
const router = express.Router()
const {getDashboard, setDashboard, updateDashboard, deleteDashboard} = require('../controllers/dashboardController')

//  router.route('/').get(getDashboard).post(setDashboard)
//  router.route('/:id').delete(deleteDashboard).put(updateDashboard)

router.get('/', getDashboard)

router.post('/', setDashboard)

router.put('/:id', updateDashboard)

router.delete('/:id', deleteDashboard)


module.exports = router