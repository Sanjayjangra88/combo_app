import React, { Component } from 'react'

export class Evnt13 extends Component {
    state={
        btns:["A","B","C",1,2,3]
    }
  render() {
    const{btns}=this.state;
    return (
      <React.Fragment>
          {btns.map((ele)=>(
        <button className="btn btn-primary m-2"id="bcdd"onClick={() => this.tot2(p1)}>{ele}</button>

          ))
          
        
        }
      </React.Fragment>
    )
  }
}

export default Evnt13