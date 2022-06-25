import React, { Component } from 'react'

export class input5b extends Component {
  render() {
    return (
        <div className="container">
        {/* <h5>{this.props.edit?"Edit detail": "Enter the details of person"}</h5> */}
        <div className="form-group">
            <label>Name of the Course</label>
            <input type="text" className='form-control'id='name'name='name' placeholder='Enter the name'onChange={this.handelChange}></input>
        </div>
        <div className="form-group">
            <label>Descricption</label>
            <input type="text" className='form-control'id='age'name='age' placeholder='Enter the Course Description'onChange={this.handelChange}></input>
        </div>
        <div className="form-group">
            <label>Duration</label>
            <input type="text" className='form-control'id='age'name='age' placeholder='Enter the Course Duration'onChange={this.handelChange}></input>
        </div>
        <div className="form-group">
            <label>Faculity</label>
            <input type="text" className='form-control'id='age'name='age' placeholder='Enter the Faculity'onChange={this.handelChange}></input>
        </div>
        <button className='btn btn-primary'onClick={this.handelSubmit}>{this.props.edit?"update":"Submit"}</button>
    </div>
    )
  }
}

export default input5b