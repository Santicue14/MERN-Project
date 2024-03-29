const {Router} = require('express')
const router = Router()

const {getNotes, createNote, updateNote, getNote, deleteNote} = require('../controllers/notes.controller')

router.route('/')
    .get(getNotes)
    .post(createNote)

router.route('/:id')
    .get(getNote)
    .put(updateNote)
    .delete(deleteNote)





module.exports = router;