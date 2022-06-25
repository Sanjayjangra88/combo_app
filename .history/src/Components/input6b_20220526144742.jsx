import React, { Component } from 'react'

export class input6b extends Component {
  render() {
    return (
        <div className='container'>
        <div className="form-group">
    <label>Add a cource</label>
    <input type="text" className='form-control'id='name'name='name' placeholder='Enter the name'onChange={this.handelChange}></input>
    <button className='btn btn-primary mr-4'>Submit</button>
</div>
    </div>
    )
  }
}

export default input6b