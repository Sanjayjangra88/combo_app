import React, { Component } from 'react'
import Input3b from './input3b'

export class input3a extends Component {
  state={
    prsn:[
      {name:"Sanjay",age:22},
      {name:"jangra",age:23},
    ],
    editPersonIndex:-1,
    view:0, 
    //0-show person and button nad 1 - show form
  }
  handelSubmit=(person)=>{
    console.log("hello",person)
  let s1={...this.state};
  s1.editPersonIndex>=0 ? s1.persons[s1.editPersonIndex]=person:
  s1.prsn.push(person);
  s1.view = 0;
  this.setState(s1);
  console.log("hy")

}
showForm=()=>{
  let s1={...this.state};
  s1.view = 1;
  this.setState(s1);
  console.log("hy")
  
}
editPerson=(index)=>{
  console.log(index)
  let s1={...this.state};
  s1.view = 1;
  s1.editPersonIndex = index
  this.setState(s1);
  console.log("hy")
}
  render() {
    let { prsn  ,view, editPersonIndex }=this.state
    let person={name:"",age:""}
    
    return view===0?(
      <div className="container">
        {prsn.map((ele,index)=>(
           <div className="row ">
          <div className="col-4 border">{ele.name}</div>
          <div className="col-4 border">{ele.age}</div>
          <div className="col-4 border"><button className='btn btn-primary btn-sm'onClick={()=>this.editPerson(index)}>Edit</button></div>
        </div>
        ))}
        <button className='btn btn-primary'onClick={this.showForm}>Add</button>
      </div>

    ):(
    <Input3b person={editPersonIndex >=0 ? person[editPersonIndex]:person}onSubmit={this.handelSubmit}edit={editPersonIndex>=0}/>
    )
    
  }
}

export default input3a
