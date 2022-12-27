const mongoose = require('mongoose')

const shopSchema = mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title : {
        type: String,
        require: [true, 'Entrez un titre']
    },
    quantity: {
        type: Number,
        default: 1,
    },
})

module.exports = mongoose.model('Shop', shopSchema)