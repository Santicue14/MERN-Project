const notesCtrl = {};

const Note = require('../models/Note')

notesCtrl.getNotes = async(req,res) => {
    const notes = await Note.find();
    res.json(notes)
}

notesCtrl.createNote = async(req,res) => {
    const {title, content, date, user} = req.body;
    const newNote = new Note({
        title,
        content,
        user
    })
    console.log(newNote.date)
    await newNote.save();
    res.json({message: 'Note saved'})}

notesCtrl.getNote =  async (req,res) => {
    const note = await Note.findById(req.params.id)
    console.log(note)
    res.json(note)}

notesCtrl.updateNote = async(req,res) => {
    const {title, content, user} = req.body
    await Note.findByIdAndUpdate(req.params.id,{
        title,
        user,
        content
    })
    res.json({message: 'Note updated'})}

notesCtrl.deleteNote = async(req,res) => {
    const note = await Note.findByIdAndDelete(req.params.id)
    res.json('Note deleted!')
}


module.exports = notesCtrl;