const asyncHandler = require('express-async-handler')

const Menu = require('../models/menuModel')

// @desc Get all menu elements from a user
// @route GET /api/menu
// @access Private
const getMenu = asyncHandler( async (req, res) => {
    const menuItems = await Menu.find()

    res.status(200).json(menuItems)
})

// @desc Create a menu element for a user
// @route POST /api/menu
// @access Private
const setMenu =asyncHandler( async (req, res) => {
    if(!req.body.firstDish){
        res.status(400)
        throw new Error('Veuillez ajouter un aliment')
    }
    if(!req.body.secondDish){
        res.status(400)
        throw new Error('Veuillez ajouter un aliment')
    }
    if(!req.body.thirdDish){
        res.status(400)
        throw new Error('Veuillez ajouter un aliment')
    }

    const menu = await Menu.create({
        date: req.body.date,
        firstDish: req.body.firstDish,
        secondDish: req.body.secondDish,
        thirdDish: req.body.thirdDish,
    })

    res.status(200).json(menu)
})

// @desc Update a menu element for a user
// @route PUT /api/menu/:id
// @access Private
const updateMenu =asyncHandler( async (req, res) => {
    const menu = await Menu.findById(req.params.id)

    if(!menu){
        res.status(400)
        throw new Error('Une erreur est survenue')
    }

    const updatedMenu = await Menu.findByIdAndUpdate(
        req.params.id, req.body, {new:true}
    )

    res.status(200).json(updatedMenu)
})

// @desc Delete a menu element for a user
// @route DELETE /api/menu/:id
// @access Private
const deleteMenu = asyncHandler( async (req, res) => {
    const menu = await Menu.findById(req.params.id)

    if(!menu){
        res.status(400)
        throw new Error('Une erreur est servenue')
    }

    await menu.remove()


    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getMenu,
    setMenu,
    updateMenu,
    deleteMenu,
}