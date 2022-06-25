import React, { Component } from 'react'

export class login2 extends Component {
  state={
    players:this.props.players
  }
  handelChange=(e)=>{
    let s1={...this.state}

  }
  render() {
    const{name}=this.state.players

    return (
      <div className="container bg-light">
        <h5>Admin login</h5>
      <div className="form-group">
                    <label>Name</label>
                    <input type="text"className="form-control"name="name"id="name"placeholder='Enter the name'onChange={this.handelChange}onBlur={this.handelValidate} />
                    <button className='btn btn-primary m-2'>Login</button>
                </div>
                </div>
    )
  }
}

export default login2