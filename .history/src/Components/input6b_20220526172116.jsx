import React, { Component } from 'react'

export class input6b extends Component {
    state={
        courses:this.props.courses,
    }
    handelSubmit=(e)=>{
        e.preventDefault()
        this.props.onSubmit(this.state.course)
    }
    handelChange=(e)=>{
        let s1={...this.state};
        s1.courses[e.currentTarget.name] = e.currentTarget.value
        this.setState(s1);
    }
  render() {
      let{name}=this.props.courses
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