// @desc Get all menu elements from a user
// @route GET /api/menu
// @access Private
const getMenu = (req, res) => {
    res.status(200).json({ message : 'Get Menu'})
}

// @desc Create a menu element for a user
// @route POST /api/menu
// @access Private
const setMenu = (req, res) => {
    res.status(200).json({ message : 'Create Menu Event'})
}

// @desc Update a menu element for a user
// @route PUT /api/menu/:id
// @access Private
const updateMenu = (req, res) => {
    res.status(200).json({ message : `Update Menu Event : ${req.params.id}`})
}

// @desc Delete a menu element for a user
// @route DELETE /api/menu/:id
// @access Private
const deleteMenu = (req, res) => {
    res.status(200).json({ message :  `Delete Menu Event : ${req.params.id}`})
}

module.exports = {
    getMenu,
    setMenu,
    updateMenu,
    deleteMenu,
}