const express = require('express')
const router = express.Router()
const { getTodo, setTodo, updateTodo, deleteTodo } = require('../controllers/todoController')

//  router.route('/').get(getTodo).post(setTodo)
//  router.route('/:id').delete(deleteTodo).put(updateTodo)

router.get('/', getTodo)

router.post('/', setTodo)

router.put('/:id', updateTodo)

router.delete('/:id', deleteTodo)



module.exports = router