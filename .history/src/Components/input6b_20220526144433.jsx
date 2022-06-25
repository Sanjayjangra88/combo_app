import React, { Component } from 'react'

export class input6b extends Component {
  render() {
    return (
        <div className='conatiner'>
        <div className="form-group">
    <label>Add a cource</label>
    <input type="text" className='form-control'id='name'name='name' placeholder='Enter the name'onChange={this.handelChange}></input>
</div>
    </div>
    )
  }
}

export default input6b