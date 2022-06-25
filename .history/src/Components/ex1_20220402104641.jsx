import React, { Component } from 'react'

 class Ex1 extends Component {
     state={
       employee: {
           name: "Steve Martin",
           company: "Google",
           department: "Technology",
           designation: "Senior Developer"
       }
        }
  render() {
      let {employee} = this.state
    return (
     
        console.log(employee)
      
    )
  }
}

export default Ex1
