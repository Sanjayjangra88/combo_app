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
        string =()=>{
let {employee} = this.state;

    return (
        <React.Fragment>
            <div className='col-3 border'></div>
        
            NAME :{employee.name}<br/>
            Company:{employee.company}<br/>
            Department:{employee.department}<br/>
            Designation:{employee.designation}<br/>
        </React.Fragment>
        )
    
  }
  render(){
    return   <React.Fragment>{this.string()}</React.Fragment>
    }
        }




export default Ex1
