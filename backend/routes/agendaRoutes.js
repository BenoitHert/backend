const express = require('express')
const router = express.Router()
const {getAgenda, setAgenda, updateAgenda, deleteAgenda} = require('../controllers/agendaController')
const { protect } = require('../middleware/authMiddleware')


//  router.route('/').get(getAgenda).post(setAgenda)
//  router.route('/:id').delete(deleteAgenda).put(updateAgenda)

router.get('/', protect, getAgenda)

router.post('/', protect, setAgenda)

router.put('/:id', protect, updateAgenda)

router.delete('/:id', protect, deleteAgenda)



module.exports = router