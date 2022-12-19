const mongoose = require('mongoose')

const dashboardSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    hasMenu: {
        type: Boolean,
        default: false
    },
    hasCalendar: {
        type: Boolean,
        default: false
    },
    hasAgenda: {
        type: Boolean,
        default: false
    },
    hasTodo: {
        type: Boolean,
        default: false
    },
    preferedColor: {
        type: String,
        default: 'White',
    },
})


module.exports = mongoose.model('Dashboard', dashboardSchema)
