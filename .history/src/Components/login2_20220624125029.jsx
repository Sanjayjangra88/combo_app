import React, { Component } from 'react'

export class login2 extends Component {
  state={
    players:this.props.players
  }
  render() {
    const{name}=this.players

    return (
      <div className="container bg-light">
      <h3>Admin login</h3>
      <label>Enter the name</label>
      <input type="text"name='name'value={name}/><br/>
      <button className='btn btn-primary'>Login</button>
    </div>
    )
  }
}

export default login2