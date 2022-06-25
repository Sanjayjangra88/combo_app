import React, { Component } from 'react'

export class input5b extends Component {
    state={
        data:this.props.data
    }
    handelChange=(e)=>{
        console.log(e)
        let s1={...this.state};
        s1.data[e.currentTarget.name]=e.currentTarget.value;
    }
  render() {
      let {name,desc,duration,faculity}=this.state.data;
      
    return (
        <div className="container">
        {/* <h5>{this.props.edit?"Edit detail": "Enter the details of person"}</h5> */}
        <div className="form-group">
            <label>Name of the Course</label>
            <input type="text" className='form-control'id='name'name='name'value={name} placeholder='Enter the name'onChange={this.handelChange}></input>
        </div>
        <div className="form-group">
            <label>Descricption</label>
            <input type="text" className='form-control'id='desc'name='desc'value={desc} placeholder='Enter the Course Description'onChange={this.handelChange}></input>
        </div>
        <div className="form-group">
            <label>Duration</label>
            <input type="text" className='form-control'id='duration'name='duration' value={duration} placeholder='Enter the Course Duration'onChange={this.handelChange}></input>
        </div>
        <div className="form-group">
            <label>Faculity</label>
            <input type="text" className='form-control'id='faculity'name='faculity' value={faculity} placeholder='Enter the Faculity'onChange={this.handelChange}></input>
        </div>
        <button className='btn btn-primary'onClick={this.handelSubmit}>{this.props.edit?"update":"Submit"}</button>
    </div>
    )
  }
}

export default input5b