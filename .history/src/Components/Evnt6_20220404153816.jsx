import React, { Component } from 'react'

class Evnt6 extends Component {
    state={
        text:""
    }

    add=(n)=>{
      let s1 ={...this.state};
    s1.text=s1.text+n;
        this.setState(s1);
    }
    
  render() {
      const {text}=this.state;
    return (
     <React.Fragment>
         <button className='btn btn-primary me-2'onClick={()=>this.add("A")}>A</button>
         <button className='btn btn-primary me-2'onClick={()=>this.add("B")}>B</button>
         <button className='btn btn-primary me-2'onClick={()=>this.add("C")}>C</button>
              <button className='btn btn-primary'onClick={()=>this.add("D")}>D</button>
              <br/><br/>
              Text is:{text}<br/>
              <button className='btn btn-primary me-2'onClick={()=>this.add("C")}>C</button>
              <button className='btn btn-primary'onClick={()=>this.add("D")}>D</button>
     </React.Fragment>
    )
  }
}

export default Evnt6