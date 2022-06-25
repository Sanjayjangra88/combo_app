import React, { Component } from "react";

export class Evnt7 extends Component {
  state = {
    a: 0,
    b: 0
  };

  addPoint =(num)=>{
   let s1={...this.state};{
   s1.a  =s1.a+num;
   s1.b  =s1.b+num;
   this.setState(s1);}
}

addPoint1 =(num)=>{
    let s1={...this.state};
     s1.b  =s1.b+num;
    this.setState(s1);
 }
 reset =()=>{
    let s1={...this.state};
     s1.a  = 0;
     s1.b  = 0;
    this.setState(s1);
 }
 
 
  render() {
    const { a,b } = this.state;
    return (
      <React.Fragment>
        <div className="row border bg-light">
          <div className="col text-center">
            Team A <br /> <br /> <br />
            <h1> {a} </h1> <br />
            <br />
            <br />
            <button className="btn btn-warning"onClick={()=>this.addPoint(3)}>+3 POINTS</button>
            <br />
            <br />
            <button className="btn btn-warning"onClick={()=>this.addPoint(2)}>+2 POINTS</button>
            <br />
            <br />
            <button className="btn btn-warning"onClick={()=>this.addPoint(1)}>FREE THROW</button>
            <br />
            <br />
          </div>
          <div className="col text-center">
            Team B <br /> <br /> <br />
            <h1> {b} </h1>
            <br />
            <br />
            <br />
            <button className="btn btn-warning"onClick={()=>this.addPoint(3)}>+3 POINTS</button>
            <br />
            <br />
            <button className="btn btn-warning"onClick={()=>this.addPoint(2)}>+2 POINTS</button>
            <br />
            <br />
            <button className="btn btn-warning"onClick={()=>this.addPoint(1)}>FREE THROW</button>
            <br />
            <br />
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-warning my-3"onClick={()=>this.reset()}>FREE THROW</button>
          </div>{" "}
        </div>
      </React.Fragment>
    );
  }
}

export default Evnt7;
