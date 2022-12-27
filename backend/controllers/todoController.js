const asyncHandler = require('express-async-handler')

const Todo = require('../models/todoModel')
const User = require('../models/userModel')

// @desc GET todolist from a user
// @route GET /todo
// @access Private
const getTodo = asyncHandler( async (req, res) => {
    const todoItems = await Todo.find({ user: req.user.id})

    res.status(200).json(todoItems)
})


// @desc Create a todo item in a todolist for a user
// @route POST /todo
// @access Private
const setTodo = asyncHandler(async (req, res) => {
    if(!req.body.title){
        res.status(400)
        throw new Error('Veuillez ajouter un titre')
    }

    const todoItem = await Todo.create({
        title: req.body.title,
        done: req.body.done,
        user: req.user.id,
    })

    res.status(200).json(todoItem)
})


// @desc Update a todo item in a todolist for a user
// @route GET /todo/:id
// @access Private
const updateTodo = asyncHandler(async (req, res) => {
    const todoItem = await Todo.findById(req.params.id)

    if(!todoItem){
        res.status(400)
        throw new Error('Une erreur est survenue')
    }

    // Check for user
    if(!req.user){
        res.status(401)
        throw new Error('Utilisateur introuvable')
    }
    // Verify the logged in user matches the dashboard user
    if(todoItem.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('Non autorisé')
    }

    const updatedTodoItem = await Todo.findByIdAndUpdate(
        req.params.id, req.body, {new:true},
    )

    res.status(200).json(updatedTodoItem)
})


// @desc Delete a todo item in a todolist for a user
// @route DELETE /agenda/:id
// @access Private
const deleteTodo = asyncHandler( async (req, res) => {
    const todoItem = await Todo.findById(req.params.id)

    if(!todoItem){
        res.status(400)
        throw new Error('Une erreur est survenue')
    }

    // Check for user
    if(!req.user){
        res.status(401)
        throw new Error('Utilisateur introuvable')
    }
    // Verify the logged in user matches the dashboard user
    if(todoItem.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('Non autorisé')
    }

    await todoItem.remove()

    res.status(200).json({ id : req.params.id})
})

module.exports = {
    getTodo,
    setTodo,
    updateTodo,
    deleteTodo
}