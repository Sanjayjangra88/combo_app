import React, { Component } from 'react'

export class dropDown extends Component {
  state={
    costumers:[]
  }
  render() {
    return (
      <div className='container'>
        <button className='btn btn-primary'>New Costumer</button>
        <button className='btn btn-primary'>List of Costumers</button>
        
      </div>
    )
  }
}

export default dropDown
