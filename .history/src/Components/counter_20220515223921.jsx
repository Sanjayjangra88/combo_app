import React, { Component } from 'react'

export class Counter extends Component {
  state={}
  render() {
    console.log("Props",this.props);
    return (
      
      <h5> Counter </h5>
    )
  }
}

export default Counter

