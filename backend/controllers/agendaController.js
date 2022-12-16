// @desc GET agenda elements from a user
// @route GET /api/agenda
// @access Private
const getAgenda = (req, res) => {
    res.status(200).json({ message : 'Get Agenda'})
}

// @desc Create agenda elements from a user
// @route POST /api/agenda
// @access Private
const setAgenda = (req, res) => {
    res.status(200).json({ message : 'Create Agenda Event'})
}

// @desc Update agenda elements from a user
// @route PUT /api/agenda/:id
// @access Private
const updateAgenda = (req, res) => {
    res.status(200).json({ message : `Update Agenda Event : ${req.params.id}`})
}

// @desc Delete agenda elements from a user
// @route DELETE /api/agenda/:id
// @access Private
const deleteAgenda = (req, res) => {
    res.status(200).json({ message :  `Delete Agenda Event : ${req.params.id}`})
}

module.exports = {
    getAgenda,
    setAgenda,
    updateAgenda,
    deleteAgenda,
}