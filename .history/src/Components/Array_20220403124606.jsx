import React, { Component } from 'react'

 class Array extends Component {
     state ={
         nums:[12,14,17,11,66]
     }
  render() {
      let {nums} =this.state;
      let nums1 =[...nums];
      nums1.sort((n1,n2)=>n2-n1);
    return (
   <ul>
       {nums1.map(n2=><li>{n2}</li>)}
   </ul>
    )
  }
}

export default Array
