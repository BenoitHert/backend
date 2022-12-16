const express = require('express')
const router = express.Router() 
const {getCalendar, setCalendar, updateCalendar, deleteCalendar} = require('../controllers/calendarController')


//  router.route('/').get(getCalendar).post(setCalendar)
//  router.route('/:id').delete(deleteCalendar).put(updateCalendar)

router.get('/', getCalendar)

router.post('/', setCalendar)

router.put('/:id', updateCalendar)

router.delete('/:id', deleteCalendar)












module.exports = router