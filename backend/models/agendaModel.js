const mongoose = require('mongoose')

const agendaSchema = mongoose.Schema({
    title:{
        type: String,
        required: [true, 'Ajoutez un titre'],
    },
    date: {
        type: Date,
        required: [true, 'Entrez une date'],
    },
    description: {
        type: String,
    },
    color: {
        type: String,
        default: 'Black',
    },
    important: {
        type: Boolean,
        default: false,
    },
})

module.exports = mongoose.model('Agenda', agendaSchema)