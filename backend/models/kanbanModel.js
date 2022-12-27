const mongoose = require('mongoose')

const kanbanSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        require: [true, 'Entrez un titre']
    },
    color: {
        type: String,
        default: 'White'
    },
    column: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('Kanban', kanbanSchema)