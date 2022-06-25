import React, { Component } from 'react'

export class Counter extends Component {


 
  render() {
    
    const{counter,onDelete,onIncrement}=this.props;
    const{id,elphabet,count}=counter;
    return <h5>Id {id}  Counter {elphabet} Count {count}
    <button className='btn btn-primary btn-sm m-2'onClick={()=>onIncrement(id)}>Increment</button>
    <button className='btn btn-danger btn-sm m-2'onClick={()=>onDelete(id)}>Delete</button>
    </h5>
    
    
  }
}

export default Counter;

