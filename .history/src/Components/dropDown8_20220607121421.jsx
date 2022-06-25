import React, { Component } from 'react'
import DropDown8Form from './dropDown8Form'

export class dropDown8 extends Component {
    state={
        work:["working","studying"],
        works:""
    }
  render() {
      const{work}=this.state;
      const works={str:[]}
      
    return (
   <DropDown8Form work={work}works={works}/>
    )
  }
}

export default dropDown8