
import React, { Component } from 'react'
import axios from 'axios'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'

export default class Noteslist extends Component {

  state = {
    notes: [],
    users: []
  }
  getData = async () => {
    const res = await axios.get('http://localhost:4000/api/notes')
    const res_users = await axios.get(`http://localhost:4000/api/users`)
    this.setState({ notes: res.data })
    this.setState({ users: res_users.data })
  }
  async componentDidMount() {
    this.getData();
  }

  deleteNote = async (id) => {
    await axios.delete('http://localhost:4000/api/notes/' + id)
    this.getData()
  }
  formatDate = (dateString) => {
    const date = new Date(dateString);
    const dateArgentina = new Date(date.getTime() - (3 * 60 * 60 * 1000));
    return format(dateArgentina)
  }
  render() {
    return (
      <div className="row">
        {
          this.state.notes.map((note, index) =>
            <div className='col-md-4 p-2' key={note._id}>
              <div className="card">
                <div className="card-header">
                  <h5>n°: {index + 1}<br />{note.title} </h5>
                  <p className='opt-note-buttons'>
                    <Link className="edit-icon" to={'/edit/' + note._id}>
                      <i className="fa-solid fa-pencil"></i>
                    </Link>
                    <span>&nbsp;&nbsp;</span>
                    <button className="trash-icon" onClick={() => this.deleteNote(note._id)}>
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </p>
                </div>
                <div className="card-body">
                  <p>{note.content}</p>
                </div>
                <div className="author">
                  <p>{note.user} </p>
                  <p>{format(note.date)}</p>
                </div>
              </div>

            </div>
          )
        }
      </div>
    )
  }
}
