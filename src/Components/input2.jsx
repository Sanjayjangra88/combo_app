import React, { Component } from 'react'
import Input1 from './input1'

export class input2 extends Component {
    handelSubmit=(person)=>{
        console.log("hello",person)
    }
  render() {
      let person={name:"",age:""}
    return (
     <Input1 person={person}onSubmit={this.handelSubmit}/>
    )
  }
}

export default input2
