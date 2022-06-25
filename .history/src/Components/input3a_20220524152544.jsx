import React, { Component } from 'react'
import Input3b from './input3b'

export class input3a extends Component {
  state={
    prsn:[
      {name:"Sanjay",age:22},
      {name:"jangra",age:23},
    ],
    view:0, 
    //0-show person and button nad 1 - show form
  }
  handelSubmit=(person)=>{
    console.log("hello",person)
}
showForm=()=>{
  let s1={...this.state};
  s1.view=1;
  this.setState(s1);
}
  render() {
    let { prsn  ,view }=this.state
    let person={name:"",age:""}
    
    return view===0?(
      <div className="container">
        {prsn.map((ele)=>(
           <div className="row ">
          <div className="col-6 border">{ele.name}</div>
          <div className="col-6 border">{ele.age}</div>
        </div>
        ))}
        <button className='btn btn-primary'onClick={()=>this.showForm}>Add</button>
      </div>

    ):(
    <Input3b person={person}onSubmit={this.handelSubmit}/>
    )
    
  }
}

export default input3a
