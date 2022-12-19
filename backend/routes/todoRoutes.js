const express = require('express')
const router = express.Router()
const { getTodo, setTodo, updateTodo, deleteTodo } = require('../controllers/todoController')
const { protect } = require('../middleware/authMiddleware')


//  router.route('/').get(getTodo).post(setTodo)
//  router.route('/:id').delete(deleteTodo).put(updateTodo)

router.get('/', protect, getTodo)

router.post('/', protect, setTodo)

router.put('/:id', protect, updateTodo)

router.delete('/:id', protect, deleteTodo)



module.exports = router