// @desc GET dashboard from a user
// @route GET /
// @access Private
const getDashboard = (req, res) => {
    res.status(200).json({ message : 'Home Page'})
}

// @desc Create dashboard element for a user
// @route POST /
// @access Private
const setDashboard = (req, res) => {
    res.status(200).json({ message : 'Create Dashboard Component'})
}

// @desc Update dashboard element for a user
// @route PUT /:id
// @access Private
const updateDashboard = (req, res) => {
    res.status(200).json({ message : `Update Dashboard Component : ${req.params.id}`})
}

// @desc Delete dashboard element for a user
// @route DELETE /:id
// @access Private
const deleteDashboard = (req, res) => {
    res.status(200).json({ message :  `Delete Dashboard Component : ${req.params.id}`})
}


module.exports = {
    getDashboard,
    setDashboard,
    updateDashboard,
    deleteDashboard
}