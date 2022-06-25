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
      const{name,age,email}=this.state.student;
    return (
        <div className="container">
        
        <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control"id="name" name="name"value={name}  placeholder="Enter your Name"onChange={this.handelChange}></input>
        </div>
        <div className="form-group">
            <label>Age</label>
            <input type="text" className="form-control"id="age"name="age"value={age} placeholder="Enter your Age"onChange={this.handelChange}></input>
        </div>
        <div className="form-group">
            <label>Email ID</label>
            <input type="text" className="form-control"id="email"name="email"value={email} placeholder="Enter your email"onChange={this.handelChange}></input>
        </div>
        <button className='btn btn-primary' onClick={this.handelSubmit}>{this.props.edit?"Update":"Submit"}</button>
    </div>
    )
  }
}

export default input8b