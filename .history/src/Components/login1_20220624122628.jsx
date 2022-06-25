import React, { Component } from 'react'

export class login1 extends Component {
  render() {
    return (
      <div className="container bg-light">
        <h5>User login</h5>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text"className="form-control"name="name"id="name"placeholder='Enter the name'onChange={this.handelChange}onBlur={this.handelValidate} />
                   
                </div>
        {/* <h3>Player login</h3>
        <label>Enter the name</label>
        <input type="text"name='name'/><br/>
        <button className='btn btn-primary'>Login</button> */}
      </div>
    )
  }
}

export default login1