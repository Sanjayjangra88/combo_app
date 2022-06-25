import React, { Component } from 'react'
import Visitor, { visitor } from "./visitor";

export class visitorSystem extends Component {
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
      const{Visitors}=this.state;
      
    return (
      <div className='container'>
          {visitor.map((ele)=>(
          <Visitor visitor={ele}/>
          ))}
        
      </div>
    )
  }
}

export default visitorSystem
