import React, { Component } from 'react'
import Players1 from './players1';
export class PlayerSystem extends Component {
    state={
        names:[{name:"Jack",score:21},{name:"Steve",score:30},{name:"Martha",score:44},{name:"Bob",score:15},{name:"Kathrine",score:28}]

    }
  render() {
      const{names}=this.state;
    return (
        
      <div className='container'>
          {<h2>List of Name</h2>}
          {names.map((ele)=>(<Players1 names={ele} />))}

      </div>
    )
  }
}

export default PlayerSystem