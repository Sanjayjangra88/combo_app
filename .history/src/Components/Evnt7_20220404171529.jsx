import React, { Component } from "react";

export class Evnt7 extends Component {
  state = {
    a: 0,
    b: 0
  };

  addPoint =(num)=>{
   let s1={...this.state};
   s1.a = a+num;
   this.setState(s1);


  }
  render() {
    const { teamA_Score, teamB_Score } = this.state;
    return (
      <React.Fragment>
        <div className="row border bg-light">
          <div className="col text-center">
            Team A <br /> <br /> <br />
            <h1> {teamA_Score} </h1> <br />
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
            <h1> {teamB_Score} </h1>
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
            <button className="btn btn-warning"onClick={()=>this.reset("")}>FREE THROW</button>
          </div>{" "}
        </div>
      </React.Fragment>
    );
  }
}

export default Evnt7;
