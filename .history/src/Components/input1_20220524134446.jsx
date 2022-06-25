import React, { Component } from 'react'

export class input1 extends Component {
  render() {
    return (
      <div className="container">
          <h5>Enter the details of person</h5>
          <div className="form-group">
              <label>Name</label>
              <input type="text" className='form-control'id='name'name='name'placeholder='Enter the name'></input>
          </div>
      </div>
    )
  }
}

export default input1
