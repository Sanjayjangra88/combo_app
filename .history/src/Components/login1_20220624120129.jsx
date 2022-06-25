import React, { Component } from 'react'

export class login1 extends Component {
  render() {
    return (
      <div className="container">
        <h3>Player login</h3>
        <label>Enter the name</label>
        <input type="text"name='name'/>
      </div>
    )
  }
}

export default login1