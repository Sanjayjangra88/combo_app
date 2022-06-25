import React, { Component } from 'react'

export class Evnt8 extends Component {
    state={
        numbers:[1,3,5,7],
        expression:"",
        CalcValue:0,
        operator:"",
      }
    
    tot2 =(p1,num)=>{
      let s1 ={...this.state}
       if(num=0){
        s1.operator=s1.operator="+";
        s1.expression=s1.expression+"+"+p1;
        s1.CalcValue=s1.CalcValue+p1;
        this.setState(s1);
      }
    

    }
    
    

  render() {
    const {numbers,expression,CalcValue,operator} = this.state;
    return (
       
        
          <React.Fragment>
            <div className="continer">Operators : 
            <button className="btn btn-primary m-2"id="abc"onClick={() => this.tot2("0")}>Add</button>
            <button className="btn btn-primary m-2"id="bcd"onClick={() => this.tot2("1")}>Multiply</button>
            </div>
            {numbers.map((p1) => (
              
              <button className="btn btn-primary m-2"onClick={() => this.tot2(p1)}>{p1}</button>
              
            ))}
            <br />
          Opertor={operator}<br/>  
          Expression={expression}<br/>
           Calculated Value={CalcValue}
            
          </React.Fragment>
        );
      
    
  }
}

export default Evnt8