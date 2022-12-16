const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    // liste de todo items?
    title: {
        type: String,
        required: [true, 'Enter Title'],
    },
    done: {
        type: Boolean,
        default: false,
    },
})

module.exports = mongoose.model('Todo', todoSchema)