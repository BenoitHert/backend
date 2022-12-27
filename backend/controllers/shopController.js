const asyncHandler = require('express-async-handler')
const { set } = require('mongoose')

const Shop = require('../models/shopModel')
const User = require('../models/userModel')

// @desc GET shoplist from a user
// @route GET /shoplist
// @access Private
const getShop = asyncHandler( async (req, res) => {
    const shopItems = await Shop.find({ user: req.user.id})

    res.status(200).json(shopItems)
})

// @desc Create a shop item for a user
// @route POST /shoplist
// @access Private
const setShop = asyncHandler(async(req, res) => {
    if(!req.body.title){
        res.status(400)
        throw new Error('Veuillez entrer un titre')
    }

    const shopItem = await Shop.create({
        title: req.body.title,
        quantity: req.body.quantity,
    })

    res.status(200).json(shopItem)
})

// @desc Update a shop item for a user
// @route PUT /shoplist
// @access Private
const updateShop = asyncHandler(async(req, res) => {
    const shopItem = await Shop.findById(req.params.id)

    if(!shopItem){
        res.status(400)
        throw new Error('Une erreur est survenue')
    }
    
    // Check for user
    if(!req.user){
        res.status(401)
        throw new Error('Utilisateur introuvable')
    }

    // Verify user is allowed
    if(shopItem.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('Accès non autorisé')
    }

    const updatedShop = await Shop.findByIdAndUpdate(
        req.params.id, req.body, {new:true},
    )

    res.status(200).json(updatedShop)
})

// @desc delete a shop item for a user
// @route DELETE /shoplist
// @access Private
const deleteShop = asyncHandler(async(res,req) => {
    const shopItem = await Shop.findById(req.params.id)

    if(!shopItem){
        res.status(400)
        throw new Error('Une erreur est survenue')
    }

    // Check for user
    if(!req.user){
        res.status(401)
        throw new Error('Utilisateur introuvable')
    }

    // Verify user
    if(!shopItem.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('Accès non autorisé')
    }

    await shopItem.remove()

    res.status(200).json({ id : req.params.id})
})

module.exports = {
    getShop,
    setShop,
    updateShop,
    deleteShop,
}