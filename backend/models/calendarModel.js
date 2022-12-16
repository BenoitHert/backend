const mongoose = require('mongoose')

const calendarSchema = mongoose.Schema({
    title: {
        type:String,
        required: [true, 'please add'],
    },
    description: {
        type: String,
    },
    startingDate: {
        type: Date,
        required : [true, 'Add a starting date'],
    },
    endingDate: {
        type: Date,
        required: [true, 'Add an ending date'],
    },
    recurent: {
        type: Boolean,
        default: false,
    },
    color: {
        type: String,
        default: 'Black',
    },
    important: {
        type: Boolean,
        default: false,
    }
},
// {
//     timestamps: true,
// }
)

module.exports = mongoose.model('Calendar', calendarSchema)