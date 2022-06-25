import React, { Component } from 'react'

class Evnt6 extends Component {
    state={
        num:0
    }

    add=(n)=>{
      let s1 ={...this.state};
        s1.num =s1.num+n;
        this.setState(s1);
    }
    
  render() {
      const {num}=this.state;
    return (
     <React.Fragment>
         <button className='btn btn-primary me-2'onClick={()=>this.add(1)}>A</button>
         <button className='btn btn-primary me-2'onClick={()=>this.add(10)}>B</button>
              <button className='btn btn-primary'onClick={()=>this.add(100)}>C</button>
              <button className='btn btn-primary'onClick={()=>this.add(100)}>D</button>
              <br/><br/>
              Number is:{num}
     </React.Fragment>
    )
  }
}

export default Evnt6