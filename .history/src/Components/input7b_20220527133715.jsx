import React, { Component } from 'react'

export class input7b extends Component {
    state={
        costum:this.props.costum,
    }
    handelChange=(e)=>{
        e.preventDefault();
        this.props.onSubmit(this.state.costum);
    }
    handelSubmit=(e)=>{
        let s1={...this.state};
        s1.costum[e.currentTarget.name]=e.currentTarget.value;
        this.setState(s1)

    }
  render() {
      const{name,age,email}=this.state;
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
        <button className='btn btn-primary' onClick={this.handelSubmit}>Submit</button>
    </div>
    )
  }
}

export default input7b