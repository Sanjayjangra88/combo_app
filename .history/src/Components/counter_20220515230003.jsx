import React, { Component } from 'react'

export class Counter extends Component {
  state={
    value:this.props.count,
  };

  handelIncement=()=>{
    let s1={...this.state}
    s1.value++;
    this.setState(s1);
  }
  render() {
    console.log("Props",this.props);
    const{elphabet,count,id}=this.props;
    return <h5>Id {id}  Counter {elphabet} Count {this.state.value}
    <button className='btn btn-primary btn-sm'onClick={()=>this.handelIncement()}>Increment</button></h5>
    
    
  }
}

export default Counter;

