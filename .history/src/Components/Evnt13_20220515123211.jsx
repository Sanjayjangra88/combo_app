import React, { Component } from 'react'

export class Evnt13 extends Component {
    state={
        btns:["A","B","C",1,2,3]
    }
  render() {
    const{btns}=this.state;
    return (
      <React.Fragment>
          <h2>Creat new code</h2>
          <h4>Code so far:</h4>
          {btns.map((ele)=>(
        <button className="btn btn-warning m-2"id="bcdd"onClick={() => this.tot2()}>{ele}</button>

          ))}
          <br />
          <button className="btn btn-primary m-2"id="abc"onClick={() => this.getopt("+")}>Add</button>
            <button className="btn btn-primary m-2"id="bcd"onClick={() => this.getopt("*")}>Multiply</button>
      </React.Fragment>
    )
  }
}

export default Evnt13