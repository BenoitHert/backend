// @desc GET todolist from a user
// @route GET /api/todo
// @access Private
const getTodo = (req, res) => {
    res.status(200).json({ message : 'Get todo'})
}


// @desc Create a todo item in a todolist for a user
// @route POST /api/todo
// @access Private
const setTodo = (req, res) => {
    res.status(200).json({ message : 'Create todo Event'})
}


// @desc Update a todo item in a todolist for a user
// @route GET /api/todo/:id
// @access Private
const updateTodo = (req, res) => {
    res.status(200).json({ message : `Update todo Event : ${req.params.id}`})
}


// @desc Delete a todo item in a todolist for a user
// @route DELETE /api/agenda/:id
// @access Private
const deleteTodo = (req, res) => {
    res.status(200).json({ message :  `Delete todo Event : ${req.params.id}`})
}

module.exports = {
    getTodo,
    setTodo,
    updateTodo,
    deleteTodo
}