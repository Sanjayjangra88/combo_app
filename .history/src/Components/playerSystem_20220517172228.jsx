import React, { Component } from 'react'
import Players1 from './players1';
export class playerSystem extends Component {
    state={
        names:["Jack","Steve","Martha","Bob","Kathrine"]
    }
  render() {
      const{names}=this.state;
    return (
      <div className='container'>
          {names.map((ele)=>(<Players1 player={ele} />))}
      </div>
    )
  }
}

export default playerSystem