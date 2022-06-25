import React, { Component } from 'react'
import DpForm from './dpForm'

export class dropDown extends Component {
  state={
    costumers:[],
    delOption:["Home","Office","Pickup"],
    view:0
  }
  add=()=>{
    console.log("hy")
    let s1={...this.state};
    s1.view=2;
    this.setState(s1);
  }
  show=()=>{
    let s1={...this.state};
    s1.view=1;
    this.setState(s1);

    console.log("hy")
  }
  render() {
    const{costumers,view,delOption}=this.state;
    return (
      <div className='container'>
        <button className='btn btn-primary m-2'onClick={this.add}>New Costumer</button>
        <button className='btn btn-primary m-2'onClick={this.show}>List of Costumers</button><br/>
        {view==1 ?(
        costumers.length<=0?"There are no Costumers":costumers.map((ele)=><ul><li>{ele}</li></ul>))
  :view==2?
  <DpForm costumers={{}}delOption={delOption}/>
  :""}
      </div>
    )
  }
}

export default dropDown
