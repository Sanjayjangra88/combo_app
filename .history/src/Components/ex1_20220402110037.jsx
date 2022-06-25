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
        string =()=>{


    return (
        <React.Fragment>
        <h1>{this.state.employee}</h1>
        </React.Fragment>
        )
    
  }
  render(){
    return   <React.Fragment>{this.string()}</React.Fragment>
    }
        }




export default Ex1
