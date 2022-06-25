import React, { Component } from "react";

export class Evnt7 extends Component {
  state = {
    teamA_Score: 0,
    teamB_Score: 0,
  };
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
            <button className="btn btn-warning">+3 POINTS</button><br /><br />
            <button className="btn btn-warning">+2 POINTS</button><br /><br />
            <button className="btn btn-warning">FREE THROW</button><br /><br />
          </div>

          <div className="col text-center">
            Team B <br /> <br /> <br />
            <h1> {teamB_Score} </h1>
            <br />
            <br />
            <br />
            <button className="btn btn-warning">+3 POINTS</button><br /><br />
            <button className="btn btn-warning">+2 POINTS</button><br /><br />
            <button className="btn btn-warning">FREE THROW</button><br /><br />
          </div>
          
       
        <div className="d-flex justify-content-center">
        <button className="btn btn-warning">FREE THROW</button><br /><br /><br /><br /></div> </div>
      </React.Fragment>
    );
  }
}

export default Evnt7;
