const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const User = require('../models/userModel')


// @desc Register user
// @route POST /api/user
// @access Public
const registerUser = asyncHandler( async (req, res) => {
    const {name, email, password } = req.body
    
    if(!name || ! email || !password ){
        res.status(400)
        throw new Error('Veuillez remplir tous les champs')
    }

    // Check if user exists
    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('Cette adresse email est déjà utilisée')
    }

    // Password hash
    const salt = await bcrypt.genSalt(10)
    const hashedPassword= await bcrypt.hash(password, salt)

    // Create User
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    })

    if(user){
        res.status(201)
        .json({
            // only for dev
            // _id: user._id,
            // name: user.name,
            // email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Informations erronnées')
    }
})

// @desc Authenticate user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler( async (req, res) => {
    const { email, password } = req.body
    
    // Check for user email
    const user = await User.findOne({email})

    // Check matching password
    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Les informations entrées sont erronnées')
    }
})

// @desc Get user data
// @route GET /api/users/me
// @access Private
const getMe = asyncHandler( async (req, res) => {

    res.status(200).json(req.user)

})

// @desc Update user data
// @route PUT /api/users/me
// @access Private
const updateMe = asyncHandler( async (req, res) => {


    res.status(200).json({message : 'User data updated'})
})

// @desc Delete user 
// @route DELETE /api/users/me
// @access Private
const deleteMe = asyncHandler( async (req, res) => {


    res.status(200).json({message : 'User removed'})
})

// Function to generate a Json Web Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}



module.exports = {
    registerUser,
    loginUser,
    getMe,
    updateMe,
    deleteMe,
}