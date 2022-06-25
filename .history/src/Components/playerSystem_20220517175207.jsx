import React, { Component } from 'react'
import Players1 from './players1';
export class PlayerSystem extends Component {
    state={
        names:["Jack","Steve","Martha","Bob","Kathrine"]

    }
  render() {
      const{names}=this.state;
    return (
        
      <div className='container'>
          {<h2>List of Name</h2>}
          {names.map((ele)=>(<Players1 name={ele} />))}

      </div>
    )
  }
}

export default PlayerSystem