const asyncHandler = require('express-async-handler')

const Agenda = require('../models/agendaModel')

// @desc GET agenda elements from a user
// @route GET /api/agenda
// @access Private
const getAgenda = asyncHandler( async (req, res) => {
    const agendaItems = await Agenda.find()

    res.status(200).json(agendaItems)
})

// @desc Create agenda elements from a user
// @route POST /api/agenda
// @access Private
const setAgenda = asyncHandler( async (req, res) => {
    if(!req.body.title){
        res.status(400)
        throw new Error('Veuillez ajouter un titre')
    }
    if(!req.body.date){
        res.status(400)
        throw new Error('Veuillez ajouter une date')
    }
    const agendaItem = await Agenda.create({
        title: req.body.title,
        date: req.body.title,
        description: req.body.description,
        color: req.body.color,
        important: req.body.important,
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