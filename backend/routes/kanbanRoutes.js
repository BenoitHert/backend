const express = require('express')
const router = express.Router()
const {getKanban, setKanban, updateKanban, deleteKanban } = require('../controllers/kanbanController') 
const { protect } = require('../middleware/authMiddleware')


router.get('/', protect, getKanban)

router.post('/', protect, setKanban)

router.put('/:id', protect, updateKanban)

router.delete('/:id', protect, deleteKanban)


module.exports= router