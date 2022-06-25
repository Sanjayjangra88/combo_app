import React, { Component } from 'react'
import Players1 from './players1';
export class PlayerSystem extends Component {
    state={
        // names:["Jack","Steve","Martha","Bob","Kathrine"]
        names:[
            {id:12,elphabet:"A",count:0},
            {id:23,elphabet:"B",count:0},
            {id:7,elphabet:"C",count:0},
            {id:16,elphabet:"D",count:0}
],
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

export default PlayerSystem