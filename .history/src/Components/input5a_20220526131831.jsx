import React, { Component } from 'react'
import Input5b from './input5b'

export class input5a extends Component {
    state={
        data:[
            {fname:"",desc:"",duration:"",faculity:""}
    ]
    }
  render() {
      let{data}=this.state;
    return (
            <Input5b data={data}/>
        )
    
  }
}

export default input5a