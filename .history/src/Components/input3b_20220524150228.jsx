import React, { Component } from 'react'

export class input3b extends Component {
    state={
        person:this.props.person,
        
    }
    handelChange=(e)=>{
        let s1={...this.state};
        // if(e.currentTarget.name==="name")s1.persons.name=e.currentTarget.value;
        // if(e.currentTarget.name==="age")s1.persons.age=e.currentTarget.value;
        
        s1.person[e.currentTarget.name] = e.currentTarget.value
                this.setState(s1);
    }
    handelSubmit=(e)=>{
        e.preventDefault()
        console.log("submit",this.state.person)
        this.props.onSubmit(this.state.person)

    }
  render() {
    let {name,age}=this.state.person;
    return (
        <div className="container">
        <h5>Enter the details of person</h5>
        <div className="form-group">
            <label>Name</label>
            <input type="text" className='form-control'id='name'name='name'value={name} placeholder='Enter the name'onChange={this.handelChange}></input>
        </div>
        <div className="form-group">
            <label>Age</label>
            <input type="text" className='form-control'id='age'name='age'value={age} placeholder='Enter the age'onChange={this.handelChange}></input>
        </div>
        <button className='btn btn-primary'onClick={this.handelSubmit}>Submit</button>
    </div>
    )
  }
}

export default input3b