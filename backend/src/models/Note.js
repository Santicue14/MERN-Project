const {Schema, model} = require('mongoose')

const noteSchema= new Schema({
    title: {
        type: String,
        required: true,
    },
    content: String,
    date: {
        type: Date,
        default: Date.now(),
    },
    user: String},
    {
        timestamps: true
    }
)

module.exports = model('note', noteSchema)