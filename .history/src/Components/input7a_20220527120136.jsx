import React, { Component } from 'react'
import Input7b from './input7b'

export class input7a extends Component {
    state={
        costumers:[]
    }
  render() {
      const{costumers}=this.state;
    return (
      <div className='container'><br/>
      <h5>Welcome to the costumer system</h5><br/>
          <button className='btn btn-primary btn-sm mr-2'>New costumer</button>
          <button className='btn btn-primary btn-sm'>List of costumer</button>
          <br/><br/>
           <h5>{costumers.length===0?("There are zero costumer"):(<React.Fragment>
               {(costumers.map((ele)=><ul><li>{ele.name}</li></ul>))}
           </React.Fragment>)}</h5>
        
      </div>
    )
  }
}

export default input7a
