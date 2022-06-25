import React, { Component } from 'react'

export class input1 extends Component {
    state={
        persons:
            {name:"Sanjay",age:25}
        
    }
    handelChange=(e)=>{
        let s1={...this.state};
        if(e.currentTarget.name==="name")s1.persons.name=e.currentTarget.value;
        if(e.currentTarget.name==="age")s1.persons.age=e.currentTarget.value;
        
        this.setState(s1);
    }
  render() {
      let {name,age}=this.state.persons;
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
      </div>
    )
  }
}

export default input1
