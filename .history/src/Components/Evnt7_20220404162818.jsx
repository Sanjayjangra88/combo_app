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
      <div className="row text-center">
          <div className="col-6"><h4>Team A</h4>
        <br/>{teamA_Score}          
          </div>
          <div className="col-6"><h4>Team B</h4>
          <br/>{teamB_Score} 
          </div>
         
        </div>
      </React.Fragment>
    )
  }
}

export default Evnt7