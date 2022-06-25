import React, { Component } from 'react'

export class dropDown extends Component {
  state={
    costumers:["hy"]
  }
  render() {
    const{costumers}=this.state;
    return (
      <div className='container'>
        <button className='btn btn-primary m-2'>New Costumer</button>
        <button className='btn btn-primary m-2'>List of Costumers</button><br/>
        {costumers.length<=0?"There are no Costumers":costumers.map((ele)=><ul><li>{ele}</li></ul>)}
        
      </div>
    )
  }
}

export default dropDown
