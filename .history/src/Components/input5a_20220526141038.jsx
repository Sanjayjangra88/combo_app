import React, { Component } from 'react'
import Input5b from './input5b'

export class input5a extends Component {
    state={
        data:[],
        
    }
    handelSubmit=(data)=>{
      console.log(data)
      let s1={...this.state};
      s1.data.push(data)
    }
  render() {
      let{data}=this.state;
    return (
            <Input5b data={data}onSubmit={this.handelSubmit}/>
        )
    
  }
}

export default input5a