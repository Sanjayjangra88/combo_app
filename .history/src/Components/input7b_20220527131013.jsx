import React, { Component } from 'react'

export class input7b extends Component {
  render() {
    return (
        <div className="container">
        <h5>Enroll Student in Course</h5>
        <div className="form-group">
            <label>Student Id</label>
            <input type="text" className="form-control"id="id" name="id" value={id} placeholder="Enter the student id"onChange={this.handelChange}></input>
        </div>
        <div className="form-group">
            <label>Name of Student</label>
            <input type="text" className="form-control"id="name"name="name"value={name}placeholder="Enter the student Name"onChange={this.handelChange}></input>
        </div>
        <button className='btn btn-primary' onClick={this.handelSubmit}>Enroll</button>
    </div>
    )
  }
}

export default input7b