import React, { Component } from 'react'
import Input3b from './input3b'

export class input3a extends Component {
  handelSubmit=(person)=>{
    console.log("hello",person)
}
  render() {
    let person={name:"",age:""}
    return (
      <Input3b person={person}onSubmit={this.handelSubmit}/>
    )
  }
}

export default input3a
