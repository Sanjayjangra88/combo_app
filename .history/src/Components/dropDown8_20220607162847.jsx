import React, { Component } from 'react'
import DropDown8Form from './dropDown8Form'

export class dropDown8 extends Component {
    state={
        person:[]
        
    }
  render() {
      const{person}=this.state;
      const costum={company:"",desgination:"",college:"",course:""}
      const costum1={gender:""}
      
    return (
   <DropDown8Form costumers={costum}costumers1={costum1}/>
    )
  }
}

export default dropDown8