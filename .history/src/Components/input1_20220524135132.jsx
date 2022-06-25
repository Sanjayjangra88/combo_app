import React, { Component } from 'react'

export class input1 extends Component {
    state={
        persons:
            {name:"Sanjay"}
        
    }
  render() {
      let {name}=this.state.persons;
    return (
      <div className="container">
          <h5>Enter the details of person</h5>
          <div className="form-group">
              <label>Name</label>
              <input type="text" className='form-control'id='name'name='name'value={name} placeholder='Enter the name'></input>
          </div>
      </div>
    )
  }
}

export default input1
