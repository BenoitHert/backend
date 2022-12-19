const mongoose = require('mongoose')

const menuSchema = mongoose.Schema({
    // liste de plats? 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    date: {
        type: Date,
        required: [true, 'Enter date'],
    },
    firstDish: {
        type: String,
        required: [true, 'Enter a dish'],
    },
    secondtDish: {
        type: String,
        required: [true, 'Enter a dish'],
    },
    thirdDish: {
        type: String,
        required: [true, 'Enter a dish'],
    },
})

module.exports = mongoose.model('Menu', menuSchema)