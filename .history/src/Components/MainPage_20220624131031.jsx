import React, { Component } from 'react'
import Login1 from './login1'

export class mainPage extends Component {
    state={
       players:{},
       admin:{},
        view:0
    }
    player=()=>{
    let s1={...this.state}
    s1.view=1;
    this.setState(s1);
        console.log("hy")
    }
    user=()=>{
        console.log("hy")
    }
  render() {
    const{view,players}=this.state;
    return (
      <React.Fragment>
      <div className='container'>
        <h2>Login or Registration Page</h2>
        <button className='btn btn-primary mr-2'onClick={this.player}>User login</button>
        <button className='btn btn-primary'onClick={this.user}>Admin login</button>
        </div>
        {view===1? <Login1 players={players}/>:""}
        </React.Fragment>
        
        
        )
        
  }
}

export default mainPage
