import React, { Component } from 'react'

export class dpForm extends Component {
  render() {
    return (
      <div className='container'>
           <div className="form-group">
                    <label>Name</label>
                    <input type="text"className="form-control"name="name"id="name"placeholder='Enter the name'value={name}onChange={this.handelChange} />
                </div>
      </div>
    )
  }
}

export default dpForm