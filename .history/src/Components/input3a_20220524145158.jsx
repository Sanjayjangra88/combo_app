import React, { Component } from 'react'
import Input3b from './input3b'

export class input3a extends Component {
  state={
    persons:[{name:"Sanjay",age:22},{name:"jangra",age:23}],
    view:0, //0-show person and button nad 1 - show form
  }
  handelSubmit=(person)=>{
    console.log("hello",person)
}
  render() {
    let person={name:"",age:""}
    let {persons,view}=this.State;
    return view===0?(
      <div className="container">
        {persons.map((ele)=>
        <div className="row">
          <div className="col-6">{ele.name}</div>
          <div className="col-6">{ele.age}</div>
        </div>
           
           )}
      </div>

    ):(
    <Input3b person={person}onSubmit={this.handelSubmit}/>
    )
    
  }
}

export default input3a
