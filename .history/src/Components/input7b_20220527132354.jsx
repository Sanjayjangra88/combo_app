import React, { Component } from 'react'

export class input7b extends Component {
  render() {
    return (
        <div className="container">
        
        <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control"id="id" name="id"  placeholder="Enter your Name"onChange={this.handelChange}></input>
        </div>
        <div className="form-group">
            <label>Age</label>
            <input type="text" className="form-control"id="name"name="name"placeholder="Enter your Age"onChange={this.handelChange}></input>
        </div>
        <div className="form-group">
            <label>Email ID</label>
            <input type="text" className="form-control"id="name"name="name"placeholder="Enter your email"onChange={this.handelChange}></input>
        </div>
        <button className='btn btn-primary' onClick={this.handelSubmit}>Submit</button>
    </div>
    )
  }
}

export default input7b