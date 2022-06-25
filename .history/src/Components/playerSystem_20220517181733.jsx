import React, { Component } from 'react'
import Players1 from './players1';
export class PlayerSystem extends Component {
    state={
        names:[{name:"Jack",score:21},{name:"Steve",score:30},{name:"Martha",score:44},{name:"Bob",score:15},{name:"Kathrine",score:28}]

    }
    handelPoints=(index)=>{
        let s1={...this.state};
        
        let ele = s1.names[index];
        console.log(ele.score)
        this.setState(s1);

    }
  render() {
      const{names}=this.state;
    return (
        
      <div className='container'>
          {<h2>List of Name</h2>}
          {names.map((ele,index)=>(<Players1 names={ele}index={index} addPoint={this.handelPoints}/>))}

      </div>
    )
  }
}

export default PlayerSystem