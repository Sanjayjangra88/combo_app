import React, { Component } from 'react'

export class Evnt13 extends Component {
    state={
        btns:["A","B","C",1,2,3],
        code:[],
        codesoFar:[]
    }

   btns=(ele)=>{
    const s2={...this.state}
    console.log(ele)
    s2.codesoFar=s2.codesoFar+ele;
    this.setState(s2);

   }
   add=()=>{
    const s2={...this.state}
    s2.codesoFar===s2.code? alert("This is already exits"):
    s2.code.push(s2.codesoFar);
    s2.codesoFar='';
    this.setState(s2)

   }
  render() {
    const{btns,code,codesoFar}=this.state;
    return (
      <React.Fragment>
          <h2>Creat new code</h2>
          Code so far: {codesoFar}<br />
          {btns.map((ele)=>(
        <button className="btn btn-warning m-2"id="bcdd"onClick={() => this.btns(ele)}>{ele}</button>

          ))}
          <br />
          <br />
          <button className="btn btn-primary m-2"id="abc"onClick={() => this.add()}>Add New Code</button>
            <button className="btn btn-primary m-2"id="bcd"onClick={() => this.getopt("*")}>Clear Code</button>
            <br />
            <br />
            <h2>List Of Created Code </h2><br/>  {code.map((ele)=>(
        <li className='text-left m-3'>{ele}</li>

          ))}
      </React.Fragment>
    )
  }
}

export default Evnt13