import React, { Component } from 'react'

export class Counter extends Component {
  state={};


  render() {
    console.log("Props",this.props);
    const{elphabet,count}=this.props;
    return <h5>Counter {elphabet} Count {count}</h5>
    
  }
}

export default Counter;

