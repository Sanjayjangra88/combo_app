import React, { Component } from 'react'

export class visitor extends Component {
    getButton=(status,onEnter,onExit,onDelete,id)=>
        status === "Outside" ? (
        <button className="btn btn-success btn-sm m-2"onClick={()=>onEnter(id)}>Enter</button>
        ):status === "Inside"  ? (
        <button className="btn btn-danger btn-sm m-2"onClick={()=>onExit(id)}>Exit</button>
        ):(
           <button className="btn btn-danger btn-sm m-2"onClick={()=>onDelete(id)}>Exit Queue</button>
          
            );
         
        getColor =(status)=>
        status==="Outside"
        ? "bg-dark text-white"
        :status === "Inside"
        ? "bg-secondary text-white":
        "bg-light"
        


    
  render() {
      const{visitor,onEnter,onExit,onDelete}=this.props;
      const{id,name,status}=visitor;
    return (
      <div className={"row border m-1 "+this.getColor(status)}>
          <div className="col-3">{id}</div>
          <div className="col-3">{name}</div>
          <div className="col-3">{status}</div>
          <div className="col-3">{this.getButton(status,onEnter,onExit,onDelete,id)}</div>
        
      </div>
    );
  }
}

export default visitor
