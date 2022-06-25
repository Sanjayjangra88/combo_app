import React, { Component } from 'react'
import Input7b from './input7b'

export class input7a extends Component {
    state={
        costumers:[]
    }
  render() {
      const{costumers}=this.state;
    return (
      <div className='container'>
          <button className='btn btn-primary btn-sm'>New costumer</button>
          <button className='btn btn-primary btn-sm'>List of costumer</button>
          <h5>Welcome to the costumer system</h5>
          <h5>{costumers.length===0?"There are zero costumer":""}</h5>
        
      </div>
    )
  }
}

export default input7a
