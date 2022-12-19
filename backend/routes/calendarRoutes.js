const express = require('express')
const router = express.Router() 
const {getCalendar, setCalendar, updateCalendar, deleteCalendar} = require('../controllers/calendarController')
const { protect } = require('../middleware/authMiddleware')

//  router.route('/').get(getCalendar).post(setCalendar)
//  router.route('/:id').delete(deleteCalendar).put(updateCalendar)

router.get('/', protect, getCalendar)

router.post('/', protect, setCalendar)

router.put('/:id', protect, updateCalendar)

router.delete('/:id', protect, deleteCalendar)












module.exports = router