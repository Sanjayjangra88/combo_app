import React, { Component } from 'react'

export class dropDown extends Component {
  state={
    costumers:[]
  }
  render() {
    return (
      <div className='container'>
        <button className='btn btn-primary m-2'>New Costumer</button>
        <button className='btn btn-primary m-2'>List of Costumers</button>
        
      </div>
    )
  }
}

export default dropDown
