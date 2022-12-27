const asyncHandler = require('express-async-handler')

const Kanban = require('../models/kanbanModel')
const User = require('../models/userModel')


// @desc GET kanban elements from a user
// @route GET /kanban
// @access Private
const getKanban = asyncHandler( async (req, res) => {
    const kanbanItems = await Kanban.find({ user : req.user.id})

    res.status(200).json(kanbanItems)
})


// @desc Create kanban elements for a user
// @route POST /kanban
// @access Private
const setKanban = asyncHandler( async (req, res) => {
    if(!req.body.title){
        res.status(400)
        throw new Error('Veuillez entrer toutes les informations')
    }

    const kanbanItem = await Kanban.create({
        title: req.body.title,
        column: req.body.column,
        color: req.body.color,
        user: req.user.id,
    })

    res.status(200).json(kanbanItem)
})

// @desc Update kanban elements from a user
// @route PUT /kanban/:id
// @access Private
const updateKanban = asyncHandler( async(req, res) => {
    const kanbanItem = await Kanban.findById(req.params.id)

    if(!kanbanItem){
        res.status(400)
        throw new Error('Une erreur est survenue')
    }

    // Check for user
    if(!req.user){
        res.status(401)
        throw new Error('Utilisateur introuvable')
    }

    // Verify the logged in user
    if(kanbanItem.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('Accès non autorisé')
    }

    const updatedKanban = await Kanban.findByIdAndUpdate(
        req.params.id, req.body, {new:true},
    )

    res.status(200).json(updatedKanban)
})

// @desc Delete a todo item in a todolist for a user
// @route DELETE /agenda/:id
// @access Private
const deleteKanban = asyncHandler(async(req,res) => {
    const kanbanItem = await Kanban.findById(req.params.id)

    if(!kanbanItem){
        res.status(400)
        throw new Error('Une erreur est survenue')
    }

    // Check for user
    if(!req.user){
        res.status(401)
        throw new Error('Utilisateur introuvable')
    }

    // Verify the logged in user
    if(kanbanItem.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('Accès non autorisé')
    }
    
    await kanbanItem.remove()

    res.status(200).json({ id : req.params.id})

})



module.exports = {
    getKanban,
    setKanban,
    updateKanban,
    deleteKanban
}