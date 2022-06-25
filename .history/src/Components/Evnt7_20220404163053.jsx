import React, { Component } from 'react'

export class Evnt7 extends Component {
    state={
        teamA_Score:0,
        teamB_Score:0,

    }
  render() {
      const {teamA_Score,teamB_Score}=this.state;
    return (
        <React.Fragment>
      <div className="row text-center border bg-light">
          <div className="col-6"><h4>Team A</h4>
        <br/>
        <h1>{teamA_Score}  </h1>        
          </div>
          <div className="col-6"><h4>Team B</h4>
          <br/>
          <h1>{teamB_Score} </h1>
          </div>
         
        </div>
      </React.Fragment>
    )
  }
}

export default Evnt7