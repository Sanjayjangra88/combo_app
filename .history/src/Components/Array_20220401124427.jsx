import React, { Component } from 'react'

 class Array extends Component {
     state ={
         nums:[12,14,17,11,66]
     }
  render() {
      let {nums} =this.state;
    return (
   <ul>
       {nums.map(n1=><li>{n1}</li>)}
   </ul>
    )
  }
}

export default Array
