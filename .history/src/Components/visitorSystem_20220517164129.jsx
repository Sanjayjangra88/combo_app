import React, { Component } from 'react'
import Visitor, { visitor } from "./visitor";

export class visitorSystem extends Component {
    state={
        Visitors:[
            {id:101,name:"Jack",status:"Outside"},
            {id:102,name:"Tim",status:"Outside"},
            {id:103,name:"Marry",status:"Outside"},
            {id:104,name:"Steave",status:"Outside"},
            {id:105,name:"Aanna",status:"Outside"},
            {id:106,name:"Kathy",status:"Outside"},
            {id:107,name:"Mag",status:"Outside"},
            {id:108,name:"Bob",status:"Outside"},
        ],
        queue:[],
    }
    getInsideCount=()=>
        this.state.Visitors.reduce((acc,curr)=>acc+(curr.status==="Inside"?1:0),0);
    
    onhandelEnter=(id)=>{
        let s1= {...this.state};
        let visitor = s1.Visitors.find((ele)=>ele.id===id);
        let insideCount=this.getInsideCount();
        if(insideCount===2){
            visitor.status = "Waiting";
           s1.queue.push(visitor)
        }
        else visitor.status="Inside";
        this.setState(s1);
         
        
    }
    onhandelExit=(id)=>{
        let s1= {...this.state};
        let visitor = s1.Visitors.find((ele)=>ele.id===id);
        visitor.status="Outside";
        if(s1.queue.length>0){
            let v1 = s1.queue.shift();
            v1.status = "Inside";
        }
        this.setState(s1);

    }
    onhandelDelete=(id)=>{
      let s1= {...this.state};
        let visitor = s1.queue.find((ele)=>ele.id===id)
        console.log(visitor);
         s1.queue.splice(visitor,1);
        
         
        
      this.setState(s1);
    }

  render() {
      const{Visitors,queue}=this.state;
      
    return (
      <div className='container'>
          <h4>Inside : {this.getInsideCount()} Queue : {queue.length}</h4>
          {Visitors.map((ele)=>(
          <Visitor visitor={ele} onEnter={this.onhandelEnter}onExit={this.onhandelExit}onDelete={this.onhandelDelete}/>
          ))}
          <h4>Queue</h4>
          <ul>
        {queue.map((ele)=><li>{ele.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default visitorSystem
