import React, { Component } from 'react'

export class input6b extends Component {
    state={
        course:this.props.course,
    }
    handelSubmit=(e)=>{
        e.preventDefault()
        this.props.onSubmit(this.state.course)
    }
  render() {
      let{name}=this.state.course
    return (
        <div className='container'>
        <div className="form-group">
    <label>Add a cource</label>
    <input type="text" className='form-control'id='name'name='name'value={name} placeholder='Enter the name'onChange={this.handelChange}></input>
   <br/> <button className='btn btn-primary mr-2'onClick={this.handelSubmit}>Submit</button>
</div>
    </div>
    )
  }
}

export default input6b