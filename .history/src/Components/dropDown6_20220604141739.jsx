import React, { Component } from 'react'
import DpForm from './dpForm'

export class dropDown extends Component {
  state={
    costumers:[],
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
  handelSubmit=(costumer)=>{
    let s1={...this.state};
    // s1.editPersonIndex>=0 ?  
    // (s1.persons[s1.editPersonIndex]=person):
    s1.costumers.push(costumer);
    s1.view=0;
    // s1.editPersonIndex=-1;
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
        
        costumers.length<=0?"There are no Costumers":costumers.map((ele,index)=>(<div className='container'>
          
          <div className="row border">
                     <div className="col-3 border">{ele.name}</div>
                     <div className="col-3 border">{ele.gender}</div>
                     <div className="col-2 border">{ele.delivery}</div>
                     <div className="col-2 border">{ele.payment}</div>
                     <div className="col-2 border">{ele.slot}</div>
                     <div className="col-3 border">
                         <button className="btn btn-warning btn-sm mr-2"onClick={()=>this.editPerson(index)}>Edit</button>
                         <button className="btn btn-danger btn-sm mr-2"onClick={()=>this.deletePerson(index)}>Delete</button>
                     </div>
                    </div>
        </div>)))
      
  :view==2?
  <DpForm costumers={{}}onSubmit={this.handelSubmit}/>
  :""}
      </div>
    )
  }
}

export default dropDown
