import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CreateNote() {
  const { id } = useParams(); // Accede al parámetro de la URL

  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isEditting, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true); // Nuevo estado para indicar si se está cargando la lista de usuarios

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          setIsEditing(true);
          console.log(true);

          const noteRes = await axios.get(`http://localhost:4000/api/notes/${id}`)
          const noteData = noteRes.data

          setUserSelected(noteData.user);
          setTitle(noteData.title);
          setContent(noteData.content)
        } else {
          setIsEditing(false);
          console.log(false);
        }
        
        const res = await axios.get('http://localhost:4000/api/users');
        setUsers(res.data.map(user => [user.username, user.fullname]));
        setLoading(false); // Establecer loading a false cuando se completa la llamada a la API
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [id]); 
  
  const onSubmit = async e => {
    e.preventDefault();
    if (title !== '' && content !== '' && userSelected !== '') {
      const newNote = {
        user: userSelected,
        title: title,
        content: content
      };
      try {
        if (!isEditting){
          await axios.post('http://localhost:4000/api/notes/', newNote);
        } else{
          await axios.put('http://localhost:4000/api/notes/'+id, newNote);
        }
        window.location.href = '/listareclamos';
      } catch (error) {
        console.error('Error submitting note:', error);
      }
    } else {
      alert('Llene todos los casilleros');
    }
  };

  const onInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'userSelected':
        setUserSelected(value);
        break;
      case 'title':
        setTitle(value);
        break;
      case 'content':
        setContent(value);
        break;
      default:
        break;
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="row">
      <div className="card card-body create-note-form">
        <h4>Create a note</h4>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <select
              className="form-control"
              name="userSelected"
              onChange={onInputChange}
              value={userSelected}
            >
              <option value="">Seleccione un usuario</option>
              {users.map(user => (
                <option key={user[0]} value={user[0]}>
                  {user[1]}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Titulo"
              name="title"
              onChange={onInputChange}
              value={title}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="content"
              className="form-control"
              placeholder="Description"
              onChange={onInputChange}
              value={content}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateNote;
