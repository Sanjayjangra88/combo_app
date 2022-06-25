import React, { Component } from 'react'

 class Ex1 extends Component {
     state={
       employee: {
           Name: "Steve Martin",
           Company: "Google",
           Department: "Technology",
           Designation: "Senior Developer"
       }
        }
  render() {
      let {employee} = this.state
    return (
     
        console.log(employee)
      
    )
    
  }
  break;
}


export default Ex1
