import React, { Component } from 'react'

export class studentForm extends Component {
    state={
        student:this.props
    }
    handelChange=(e)=>{
        

        let s1={...this.state};
        console.log(s1.student.student)
s1.student.student[e.currentTarget.name] = e.currentTarget.value
                this.setState(s1);
    }
    handelSubmit=(e)=>{
        e.preventDefault()
        // console.log("submit",this.state.course)
        this.props.onSubmit(this.state.student.student)

    }
  render() {
      let{id,name}=this.state.student;
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

export default studentForm
