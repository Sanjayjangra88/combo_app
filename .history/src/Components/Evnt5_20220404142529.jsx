import React, { Component } from 'react'

class Evnt5 extends Component {
    state={
        num:0
    }

    add1=(n)=>{
      let s1 ={...this.state};
        s1.num =s1.num+n;
        this.setState(s1);
    }
    
  render() {
      const {num}=this.state;
    return (
     <React.Fragment>
         <button className='btn btn-primary me-2'onClick={()=>this.add(1)}>Add 1</button>
         <button className='btn btn-primary me-2'onClick={()=>this.add(10)}>Add 10</button>
              <button className='btn btn-primary'onClick={()=>this.add(100)}>Add 100</button><br/><br/>
              Number is:{num}
     </React.Fragment>
    )
  }
}

export default Evnt5