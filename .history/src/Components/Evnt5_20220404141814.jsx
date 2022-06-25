import React, { Component } from 'react'

class Evnt5 extends Component {
    state={
        num:0,
    }

    add1=()=>{
      let s1 ={...this.sate};
        s1.num =s1.num+1;
        this.setState(s1);
    }
    
  render() {
      const {num}=this.sate;
    return (
     <React.Fragment>
         <button className='btn btn-primary me-2'onClick={()=>this.add1()}>Add 1</button>
         <button className='btn btn-primary me-2'onClick={()=>this.add10()}>Add 10</button>
              <button className='btn btn-primary'onClick={()=>this.add100()}>Add 100</button>
              Number is:{num};
     </React.Fragment>
    )
  }
}

export default Evnt5