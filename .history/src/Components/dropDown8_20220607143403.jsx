import React, { Component } from 'react'
import DropDown8Form from './dropDown8Form'

export class dropDown8 extends Component {
    state={
        person:[]
        
    }
  render() {
      const{person}=this.state;
      const costum={gender:""}
      
    return (
   <DropDown8Form costumer={costum}/>
    )
  }
}

export default dropDown8