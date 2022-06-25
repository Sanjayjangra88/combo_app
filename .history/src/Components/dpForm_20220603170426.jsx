import React, { Component } from 'react'

export class dpForm extends Component {
    state={
        person:this.props.persons
    }
    handelChange=(e)=>{
        const {currentTarget:input}=e;
        let s1={...this.state};
        s1.person[input.name]=input.value;
        this.setState(s1);
    }
  render() {
      const{name}=this.state.person;
    return (
      <div className='container'>
           <div className="form-group">
                    <label>Name</label>
                    <input type="text"className="form-control"name="name"id="name"value={name} placeholder='Enter the name'onChange={this.handelChange} />
                </div>
      </div>
    )
  }
}

export default dpForm