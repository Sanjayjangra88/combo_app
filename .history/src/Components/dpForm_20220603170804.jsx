import React, { Component } from 'react'

export class dpForm extends Component {
    state={
        costumers:this.props.costumers
    }
    handelChange=(e)=>{
        const {currentTarget:input}=e;
        let s1={...this.state};
        s1.costumers[input.name]=input.value;
        this.setState(s1);
    }
  render() {
      const{name}=this.state.costumers;
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