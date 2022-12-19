const asyncHandler = require('express-async-handler')

const Calendar = require('../models/calendarModel')
const User = require('../models/userModel')

// @desc GET all calendar elements from a user
// @route GET /api/calendar
// @access Private
const getCalendar = asyncHandler( async (req, res) => {
    const calendarItems = await Calendar.find({ user: req.user.id})

    res.status(200).json(calendarItems)
})

// @desc Create a  calendar element for a user
// @route POST /api/calendar
// @access Private
const setCalendar = asyncHandler( async (req, res) => {
    if(!req.body.title || !req.body.startingDate || !req.body.endingDate) {
        res.status(400)
        throw new Error('Veuillez entrer toutes les informations')
    }
    
    if(req.body.endingDate < req.body.startingDate) {
        res.status(400)
        throw new Error('La date de fin ne peut pas être avant la date de début')
    }
    const calendarItem = await Calendar.create({
        title: req.body.title,
        description: req.body.description,
        startingDate: req.body.startingDate,
        endingDate: req.body.endingDate,
        recurent: req.body.recurent,
        color: req.body.color,
        important: req.body.important,
        user: req.user.id,
    })

    res.status(200).json(calendarItem)
})

// @desc Update calendar elements from a user
// @route PUT /api/calendar/:id
// @access Private
const updateCalendar = asyncHandler( async (req, res) => {
    const calendarItem = await Calendar.findById(req.params.id)

    if(!calendarItem){
        res.status(400)
        throw new Error('Une erreur est survenue')
    }

    const user = await User.findById(req.user.id)
    // Check User
    if(!user){
        res.status(401)
        throw new Error('Utilisateur introuvable')
    }

    // Verify User
    if(calendarItem.user.toString() !== user.id){
        res.status(401)
        throw new Error('Accès non autorisé')
    }

    const updatedCalendarItem = await Calendar.findByIdAndUpdate(
            req.params.id, req.body, {new: true,}
        )

    res.status(200).json(updatedCalendarItem)
})

// @desc Delete calendar elements from a user
// @route DELETE /api/calendar/:id
// @access Private
const deleteCalendar = asyncHandler( async (req, res) => {
    const calendarItem = await Calendar.findById(req.params.id)

    if(!calendarItem){
        res.status(400)
        throw new Error('Une erreur est survenue')
    }

    const user = await User.findById( req.user.id)
    // Check the user
    if(!user){
        res.status(401)
        throw new Error('utilisateur introuvable')
    }
    // Verify user access
    if(calendarItem.user.toString() !== user.id){
        res.status(401)
        throw new Error('Accès non autorisé')
    }

    await calendarItem.remove()
 
    res.status(200).json({ id: req.params.id})
})


module.exports = {
    getCalendar,
    setCalendar,
    updateCalendar,
    deleteCalendar,
}