import React, { Component } from 'react'

export class input1 extends Component {
    state={
        persons:
            {name:"Sanjay",age:25}
        
    }
    handelChange=(e)=>{
        let s1={...this.state};
        s1.persons.name=e.currentTarget.value;
        this.setState(s1);
    }
  render() {
      let {name}=this.state.persons;
    return (
      <div className="container">
          <h5>Enter the details of person</h5>
          <div className="form-group">
              <label>Name</label>
              <input type="text" className='form-control'id='name'name='name'value={name} placeholder='Enter the name'onChange={this.handelChange}></input>
              <label>Name</label>
              <input type="text" className='form-control'id='name'name='name'value={name} placeholder='Enter the name'onChange={this.handelChange}></input>
          </div>
      </div>
    )
  }
}

export default input1
