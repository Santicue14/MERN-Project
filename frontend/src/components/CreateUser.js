import React, { Component } from 'react'
import axios from 'axios'
import '../App.css'
export default class CreateUser extends Component {

  state = {
    users: [],
    username: '',
    fullname: '',
  }
  async componentDidMount() {
    this.getUsers()
    console.log(this.state.users)
  }

  getUsers = async () => {
    const res = await axios.get('http://localhost:4000/api/users');
    this.setState({ users: res.data })
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }
  onChangeFullname = (e) => {
    this.setState({
      fullname: e.target.value
    })
  }
  onSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:4000/api/users', {
      username: this.state.username,
      fullname: this.state.fullname,
    })
    this.setState({ username: '', fullname: '' })
    this.getUsers()
  }
  deleteUser = async (id) => {
    await axios.delete('http://localhost:4000/api/users/' + id)
    this.getUsers()
  }
  render() {
    return (
      <div className='row'>
        <div>
          <div>
            <div className="card card-body">
              <h3>Create new user</h3>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type='text'
                    className='form-control'
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                  />
                  <input
                    type='text'
                    className='form-control'
                    value={this.state.fullname}
                    onChange={this.onChangeFullname}
                  />
                </div>
                <button
                  type='submit'>
                  Submit
                </button>
              </form>

            </div>
          </div>
          <div>
            <h3>Users List</h3>
            <table className="user-table">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Fullname</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map(user => (
                  <tr key={user._id}>
                    <td>{user.username}</td>
                    <td>{user.fullname}</td>
                    <td>
                      <button onClick={() => this.deleteUser(user._id)}>
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
