import React, { Component } from 'react'
import Input5b from './input5b'

export class input5a extends Component {
  render() {
    
        // let {name,age}=this.state.person;
        return (
            <div className="container">
            {/* <h5>{this.props.edit?"Edit detail": "Enter the details of person"}</h5> */}
            <div className="form-group">
                <label>Name of the Course</label>
                <input type="text" className='form-control'id='name'name='name' placeholder='Enter the name'onChange={this.handelChange}></input>
            </div>
            <div className="form-group">
                <label>Descricption</label>
                <input type="text" className='form-control'id='age'name='age' placeholder='Enter the age'onChange={this.handelChange}></input>
            </div>
            <button className='btn btn-primary'onClick={this.handelSubmit}>{this.props.edit?"update":"Submit"}</button>
        </div>
        )
    
  }
}

export default input5a