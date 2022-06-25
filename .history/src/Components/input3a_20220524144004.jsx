import React, { Component } from 'react'
import Input3b from './input3bb'

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
