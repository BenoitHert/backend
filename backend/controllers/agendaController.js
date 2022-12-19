const asyncHandler = require('express-async-handler')

const Agenda = require('../models/agendaModel')
const User = require('../models/userModel')

// @desc GET agenda elements from a user
// @route GET /api/agenda
// @access Private
const getAgenda = asyncHandler( async (req, res) => {
    const agendaItems = await Agenda.find({ user : req.user.id})

    res.status(200).json(agendaItems)
})

// @desc Create agenda elements from a user
// @route POST /api/agenda
// @access Private
const setAgenda = asyncHandler( async (req, res) => {
    if(!req.body.title || !req.body.date){
        res.status(400)
        throw new Error('Veuillez entrer toutes les informations')
    }

    const agendaItem = await Agenda.create({
        title: req.body.title,
        date: req.body.title,
        description: req.body.description,
        color: req.body.color,
        important: req.body.important,
        user: req.user.id,
    })

    res.status(200).json(agendaItem)
})

// @desc Update agenda elements from a user
// @route PUT /api/agenda/:id
// @access Private
const updateAgenda = asyncHandler( async (req, res) => {
    const agendaItem = await Agenda.findById(req.params.id)

    if(!agendaItem){
        res.status(400)
        throw new Error('Une erreur est survenue')
    }

    const user = await User.findById(req.user.id)
    // Check for user
    if(!user){
        res.status(401)
        throw new Error('Utilisateur introuvable')
    }

    // Verify if the logged in user matches the agenda user
    if(agendaItem.user.toString() !== user.id){
        res.status(401)
        throw new Error('Accès non autorisé')
    }

    const updatedAgendaItem = await Agenda.findByIdAndUpdate(
        req.params.id, req.body, {new:true}
    )

    res.status(200).json(updatedAgendaItem)
})

// @desc Delete agenda elements from a user
// @route DELETE /api/agenda/:id
// @access Private
const deleteAgenda = asyncHandler( async (req, res) => {
    const agendaItem = await Agenda.findById(req.params.id)

    if(!agendaItem) {
        res.status(400)
        throw new Error('Une erreur est survenue')
    }

    const user = await User.findById(req.user.id)
    // Check for user
    if (!user){
        res.status(401)
        throw new Error('Utilisateur introuvable')
    }

    // Verify the user
    if (agendaItem.user.toString() !== user.id){
        res.status(401)
        throw new Error('Accès non autorisé')
    }

    await agendaItem.remove()
    // await Agenda.findByIdAndDelete(req.params.id)
    
    res.status(200).json({ id : req.params.id})
})

module.exports = {
    getAgenda,
    setAgenda,
    updateAgenda,
    deleteAgenda,
}