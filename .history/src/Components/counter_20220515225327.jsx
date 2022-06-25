import React, { Component } from 'react'

export class Counter extends Component {
  state={};


  render() {
    console.log("Props",this.props);
    const{elphabet,count,id}=this.props;
    return <h5>Id {id}  Counter {elphabet} Count {count}
    <button className='btn btn-primary btn-sm'onClick={()=>this.handelIncement()}>Increment</button></h5>
    
    
  }
}

export default Counter;

