const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    fullname:{
        type: String,
        required: true,
        trim: true,
    }
}, {
    timestamps: true

})

module.exports = model('User', userSchema)