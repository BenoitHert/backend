const asyncHandler = require('express-async-handler')

// @desc GET all calendar elements from a user
// @route GET /api/calendar
// @access Private
const getCalendar = asyncHandler( async (req, res) => {
    res.status(200).json({ message : 'Get Calendar'})
})

// @desc Create a  calendar element for a user
// @route POST /api/calendar
// @access Private
const setCalendar = asyncHandler( async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Veuillez ajouter un titre')
    }

    res.status(200).json({ message : 'Create Calendar Event'})
})

// @desc Update calendar elements from a user
// @route PUT /api/calendar/:id
// @access Private
const updateCalendar = asyncHandler( async (req, res) => {
    res.status(200).json({ message : `Update Calendar Event : ${req.params.id}`})
})

// @desc Delete calendar elements from a user
// @route DELETE /api/calendar/:id
// @access Private
const deleteCalendar = asyncHandler( async (req, res) => {
    res.status(200).json({ message :  `Delete Calendar Event : ${req.params.id}`})
})


module.exports = {
    getCalendar,
    setCalendar,
    updateCalendar,
    deleteCalendar,
}