import React, { Component } from 'react'

export class Evnt8 extends Component {
    state={
        numbers:[1,3,5,7],
        expression:"",
        CalcValue:0,

    }
    tot =(p1)=>{
        let s1 ={...this.state};
        s1.expression=s1.expression+"+"+p1;
        s1.CalcValue=s1.CalcValue+p1;
        this.setState(s1);

    }

  render() {
    const {numbers,expression,CalcValue} = this.state;
    return (
       
        
          <React.Fragment>
            {numbers.map((p1) => (
              <button
                className="btn btn-primary m-2"
                 onClick={() => this.tot(p1)}
              >
                {p1}
              </button>
            ))}
            <br />
          Expression={expression}<br/>
           Calculated Value={CalcValue}
            
          </React.Fragment>
        );
      
    
  }
}

export default Evnt8