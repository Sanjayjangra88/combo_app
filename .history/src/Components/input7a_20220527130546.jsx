import React, { Component } from 'react'
import Input7b from './input7b'

export class input7a extends Component {
    state={
        costumers:[],
        view:0,
    }
  render() {
      const{costumers,view}=this.state;
    return(
        <React.Fragment>
      <div className='container'><br/>
      <h5>Welcome to the costumer system</h5><br/>
          <button className='btn btn-primary btn-sm mr-2'>New costumer</button>
          <button className='btn btn-primary btn-sm'>List of costumer</button>
          <br/><br/></div>

       {view===0?
      (costumers.length===0
        ?
        <div className='container'>There are no costumer</div>
        :
        <div className='container'> {costumers.map((ele)=><ul><li>{ele.name}</li></ul>)
      }</div>
     )
     :""}
 
      </React.Fragment>    
    )
    
  }
}

export default input7a
