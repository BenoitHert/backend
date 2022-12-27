const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: [true, 'Entrez un titre'],
    },
    done: {
        type: Boolean,
        default: false,
    },
})

module.exports = mongoose.model('Todo', todoSchema)