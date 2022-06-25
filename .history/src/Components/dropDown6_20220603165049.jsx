import React, { Component } from 'react'

export class dropDown extends Component {
  state={
    costumers:["hy"],
    view:0
  }
  add=()=>{
    console.log("hy")
  }
  show=()=>{
    let s1={...this.state};
    s1.view=1;
    this.setState(s1);

    console.log("hy")
  }
  render() {
    const{costumers,view}=this.state;
    return (
      <div className='container'>
        <button className='btn btn-primary m-2'onClick={this.add}>New Costumer</button>
        <button className='btn btn-primary m-2'onClick={this.show}>List of Costumers</button><br/>
        {view==1 ?(
        costumers.length<=0?"There are no Costumers":costumers.map((ele)=><ul><li>{ele}</li></ul>))
  :""}
      </div>
    )
  }
}

export default dropDown
