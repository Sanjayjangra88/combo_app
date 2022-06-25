import React, { Component } from 'react'

export class login1 extends Component {
  render() {
    return (
      <div className="container bg-light">
        <h5>User login</h5>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text"className="form-control"name="name"id="name"placeholder='Enter the name'onChange={this.handelChange}onBlur={this.handelValidate} />
                    <button className='btn btn-primary mr-2'>Login</button>
                </div>
    </div>
    )
  }
}

export default login1