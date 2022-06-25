import React, { Component } from 'react'

export class Counter extends Component {
  state={
    value:this.props.counter.count,
  };

  handelIncement=()=>{
    let s1={...this.state}
    s1.value++;
    this.setState(s1);
  }
  render() {
    
    const{counter,onDelete}=this.props;
    return <h5>Id {counter.id}  Counter {counter.elphabet} Count {this.state.value}
    <button className='btn btn-primary btn-sm m-2'onClick={()=>this.handelIncement()}>Increment</button>
    <button className='btn btn-primary btn-sm m-2'onClick={()=>onDelete(counter.id)}>Delete</button>
    </h5>
    
    
  }
}

export default Counter;

