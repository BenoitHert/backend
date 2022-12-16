const asyncHandler = require('express-async-handler')

const Dashboard = require('../models/dashboardModel')

// @desc GET dashboard from a user
// @route GET /
// @access Private
const getDashboard = asyncHandler(async (req, res) => {
    const dashboard = await Dashboard.find()

    res.status(200).json(dashboard)
})

// @desc Create dashboard element for a user
// @route POST /
// @access Private
const setDashboard = asyncHandler( async (req, res) => {
    const dashboard = await Dashboard.create({
        hasMenu: req.body.hasMenu,
        hasCalendar: req.body.hasCalendar,
        hasAgenda: req.body.hasAgenda,
        hasTodo: req.body.hasAgenda,
        preferedColor: req.body.preferedColor,
    })

    res.status(200).json(dashboard)
})

// @desc Update dashboard element for a user
// @route PUT /:id
// @access Private
const updateDashboard = asyncHandler( async (req, res) => {
    const dashboard = await Dashboard.findById(req.params.id)

    if(!dashboard){
        res.status(400)
        throw new Error('Une erreur est survenue')
    }

    const updatedDashboard = await Dashboard.findByIdAndUpdate(
        req.params.id, req.body, {new:true}
    )

    res.status(200).json(updatedDashboard)
})

// @desc Delete dashboard element for a user
// @route DELETE /:id
// @access Private
const deleteDashboard = asyncHandler( async (req, res) => {
    const dashboard = await Dashboard.findById(req.params.id)

    if(!dashboard){
        res.status(400)
        throw new Error('Une erreur est survenue')
    }
    await dashboard.remove()
    // await Dashboard.findByIdAndRemove(req.params.id)

    res.status(200).json({ id : req.params.id})
})


module.exports = {
    getDashboard,
    setDashboard,
    updateDashboard,
    deleteDashboard
}