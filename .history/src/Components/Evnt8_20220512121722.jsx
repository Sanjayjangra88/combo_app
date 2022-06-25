import React, { Component } from 'react'

export class Evnt8 extends Component {
    state={
        numbers:[1,3,5,7],
        expression:"",
        CalcValue:0,
        opt:"",
      }
    
    tot2 =(p1)=>{
      let s1 ={...this.state}
      console.log(p1);
       s1.opt==="+"? s1.CalcValue+=p1 :s1.opt==="*"?s1.CalcValue=s1.CalcValue=s1.expression || s1.CalcValue*p1:
       <React.Fragment>
         alert('select Opertor')
         return false
       </React.Fragment>
       s1.expression.length<1?s1.expression+=p1:s1.expression+=s1.opt+p1;
        this.setState(s1);
      }
    

    
    getopt=(opt)=>{
      let s1 = {...this.state};
      s1.opt=opt;
      this.setState(s1);

    }
    
    

  render() {
    const {numbers,expression,CalcValue,opt} = this.state;
    return (
       
        
          <React.Fragment>
            <div className="continer">Operators : 
            <button className="btn btn-primary m-2"id="abc"onClick={() => this.getopt("+")}>Add</button>
            <button className="btn btn-primary m-2"id="bcd"onClick={() => this.getopt("*")}>Multiply</button>
            </div>
            {numbers.map((p1) => (
              
              <button className="btn btn-primary m-2"id="bcdd"onClick={() => this.tot2(p1)}>{p1}</button>
              
            ))}
            <br />
          Opertor={opt}<br/>  
          Expression={expression}<br/>
           Calculated Value={CalcValue}
            
          </React.Fragment>
        );
      
    
  }
}

export default Evnt8