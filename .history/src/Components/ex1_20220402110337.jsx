import React, { Component } from 'react'

 class Ex1 extends Component {
     state={
       employee: {
         a1:  "Name: Steve Martin",
         a2:  "Company: Google",
         a3:  "Department: Technology",
         a4:  "Designation: Senior Developer"
       }
        }
        string =()=>{
let {employee} = this.state;

    return (
        <React.Fragment>
        <h1>{employee.a1}</h1>
        <h1>{employee.a2}</h1>
        <h1>{employee.a3}</h1>
        <h1>{employee.a4}</h1>
        </React.Fragment>
        )
    
  }
  render(){
    return   <React.Fragment>{this.string()}</React.Fragment>
    }
        }




export default Ex1
