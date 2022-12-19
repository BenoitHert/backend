const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Entrez votre nom']
    },
    email: {
        type: String,
        require: [true, 'Entrez votre email'],
        unique: true,
    },
    password: {
        type: String,
        require: [true, 'Entrez votre mot de passe']
    },  
    password2:  {
        type: String,
        require: [true, 'Confirmez votre mot de passe']
    }
}, 
{
    timestamps:true,
})


module.exports = mongoose.model('User', userSchema)