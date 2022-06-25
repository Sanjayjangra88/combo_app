import React, { Component } from 'react'

export class mainPage extends Component {
    state={
        view:0
    }
  render() {
    const{view}=this.state;
    return (
      <div className='container'>
        <h2>Login or Registration Page</h2>
        <button className='btn btn-primary mr-2'>User login</button>
        <button className='btn btn-primary'>Admin login</button>
        
      </div>
    )
  }
}

export default mainPage
