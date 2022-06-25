import React, { Component } from 'react'
import Visitor from "./visitor";

export class VisitorSystem extends Component {
    state={
        Visitors:[
            {id:101,name:"Jack",status:"Outside"},
            {id:102,name:"Tim",status:"Outside"},
            {id:103,name:"Marry",status:"Outside"},
            {id:104,name:"Steave",status:"Outside"},
            {id:105,name:"Aanna",status:"Outside"},
            {id:106,name:"Kathy",status:"Outside"},
            {id:107,name:"Mag",status:"Outside"},
            {id:108,name:"Bob",status:"Outside"},
        ]
    }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default VisitorSystem
