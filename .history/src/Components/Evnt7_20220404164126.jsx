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
      <div className="row border bg-warning">
            <div className="col-6 text-center">
                Team A                 <br /> <br /> <br /> 
             <h1>   {teamA_Score}   </h1>         <br />
            
             
            </div>

            <div className="col-6 text-center">
              Team B <br /> <br /> <br />
             <h1> {teamB_Score} </h1><br />
              <br />
            </div>
          </div>
      </React.Fragment>
    )
  }
}

export default Evnt7