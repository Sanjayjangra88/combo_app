import React, { Component } from 'react'

export class visitor extends Component {
    getButton=(status)=>{
        status === "Outside" ? (
        <button className="btn btn-success btn-sm m-2">Enter</button>
        ):status === "inside"  ? (
        <button className="btn btn-success btn-sm m-2">Exit</button>
        ):(
            ""
            );

    }
  render() {
      const{visitor}=this.props;
      const{id,name,status}=visitor;
    return (
      <div className='row border m-1'>
          <div className="col-3">{id}</div>;
          <div className="col-3">{name}</div>;
          <div className="col-3">{this.getButton(status)}</div>;
        
      </div>
    )
  }
}

export default visitor
