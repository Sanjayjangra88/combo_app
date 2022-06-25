import React, { Component } from 'react'

export class input8b extends Component {
    state={
        student:this.props.student,
    }
    handelChange=(e)=>{
        let s1={...this.state};
        s1.student[e.currentTarget.name]=e.currentTarget.value;
        this.setState(s1)
    }
    handelSubmit=(e)=>{
        e.preventDefault();
        this.props.onSubmit(this.state.student);
    }

    
  render() {
      const{name,course,year}=this.state.student;
    return (
        <div className="container">
        
        <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control"id="name" name="name"value={name}  placeholder="Enter your Name"onChange={this.handelChange}></input>
        </div>
        <div className="form-group">
            <label>Course</label>
            <input type="text" className="form-control"id="course"name="course"value={course} placeholder="Enter your course"onChange={this.handelChange}></input>
        </div>
        <div className="form-group">
            <label>Year</label>
            <input type="text" className="form-control"id="year"name="year"value={year} placeholder="Enter your year"onChange={this.handelChange}></input>
        </div>
        <button className='btn btn-primary' onClick={this.handelSubmit}>{this.props.edit?"Update":"Submit"}</button>
    </div>
    )
  }
}

export default input8b