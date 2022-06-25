import React, { Component } from 'react'

export class input8c extends Component {
  render() {
    return (
        <div className="container">
        
        <div className="form-group">
            <label>Math</label>
            <input type="text" className="form-control"id="name" name="name"  placeholder="Enter your Name"onChange={this.handelChange}></input>
        </div>
        <div className="form-group">
            <label>English</label>
            <input type="text" className="form-control"id="course"name="course" placeholder="Enter your course"onChange={this.handelChange}></input>
        </div>
        <div className="form-group">
            <label>Computer</label>
            <input type="text" className="form-control"id="year"name="year" placeholder="Enter your year"onChange={this.handelChange}></input>
        </div>
        <div className="form-group">
            <label>Science</label>
            <input type="text" className="form-control"id="year"name="year" placeholder="Enter your year"onChange={this.handelChange}></input>
        </div>
        <button className='btn btn-primary' onClick={this.handelSubmit}>{this.props.edit?"Update":"Submit"}</button>
    </div>
    )
  }
}

export default input8c
