import React, { Component } from 'react'

export class login2 extends Component {
  render() {
    return (
      <div className="container bg-light">
      <h3>Admin login</h3>
      <label>Enter the name</label>
      <input type="text"name='name'/><br/>
      <button className='btn btn-primary'>Login</button>
    </div>
    )
  }
}

export default login2