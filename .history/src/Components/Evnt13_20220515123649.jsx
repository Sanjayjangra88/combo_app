import React, { Component } from 'react'

export class Evnt13 extends Component {
    state={
        btns:["A","B","C",1,2,3],
        list:[1,2,3]
    }


  render() {
    const{btns}=this.state;
    return (
      <React.Fragment>
          <h2>Creat new code</h2>
          <h4>Code so far:</h4>
          {btns.map((ele)=>(
        <button className="btn btn-warning m-2"id="bcdd"onClick={() => this.btns()}>{ele}</button>

          ))}
          <br />
          <br />
          <button className="btn btn-primary m-2"id="abc"onClick={() => this.getopt("+")}>Add New Code</button>
            <button className="btn btn-primary m-2"id="bcd"onClick={() => this.getopt("*")}>Clear Code</button>
            <br />
            <br />
            <h2>List Of Created Code <br/>{}</h2>
      </React.Fragment>
    )
  }
}

export default Evnt13