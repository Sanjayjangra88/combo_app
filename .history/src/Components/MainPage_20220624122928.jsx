import React, { Component } from 'react'
import login1 from './login1'

export class mainPage extends Component {
    state={
        view:0
    }
    user=()=>{
        console.log("hy")
    }
  render() {
    const{view}=this.state;
    return (
      <div className='container'>
        <h2>Login or Registration Page</h2>
        <button className='btn btn-primary mr-2'onClick={this.user}>User login</button>
        <button className='btn btn-primary'onClick={this.user}>Admin login</button>
        </div>
        
        )
        
  }
}

export default mainPage
