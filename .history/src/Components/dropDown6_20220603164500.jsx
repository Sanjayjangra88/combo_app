import React, { Component } from 'react'

export class dropDown extends Component {
  state={
    costumers:[],
    view:0
  }
  add=()=>{
    console.log("hy")
  }
  show=()=>{
    console.log("hy")
  }
  render() {
    const{costumers}=this.state;
    return (
      <div className='container'>
        <button className='btn btn-primary m-2'onClick={this.add}>New Costumer</button>
        <button className='btn btn-primary m-2'onClick={this.show}>List of Costumers</button><br/>
        {costumers.length<=0?"There are no Costumers":costumers.map((ele)=><ul><li>{ele}</li></ul>)}
        
      </div>
    )
  }
}

export default dropDown
