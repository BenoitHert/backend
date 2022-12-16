const express = require('express')
const router = express.Router()
const {getAgenda, setAgenda, updateAgenda, deleteAgenda} = require('../controllers/agendaController')

//  router.route('/').get(getAgenda).post(setAgenda)
//  router.route('/:id').delete(deleteAgenda).put(updateAgenda)

router.get('/', getAgenda)

router.post('/', setAgenda)

router.put('/:id', updateAgenda)

router.delete('/:id', deleteAgenda)



module.exports = router