import React, { Component } from 'react'

export class mainPage extends Component {
    state={
        view:0
    }
  render() {
    const{view}=this.state;
    return (
      <div className='container'>
        <button className='btn btn-primary'>User login</button>
        <button className='btn btn-primary'>Admin login</button>
        
      </div>
    )
  }
}

export default mainPage
