import React, { Component } from 'react'

 class Evnt1 extends Component {
     state={
         text :"No Button Clicked"
     }
     btnClick =()=>{
         let s1 = {...this.state};
         s1.text ="ABC";
         this.state(s1);
     }
  render() {
    return (
     <React.Fragment>
         <button className="btn btn-primary me-2 "conCick={btnClick()}>ABC</button>
         <button className="btn btn-primary">ABC</button><br/>
         {this.state.text}
     </React.Fragment>
    )
  }
}

export default Evnt1