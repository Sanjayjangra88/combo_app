import React, { Component } from 'react'

export class message extends Component {

  render() {
      const{data,all,inbox,social,sent}=this.props;
    return (
        <div className="slidebar">
        <ul>
           <li><a>Folders</a></li>
           <li><a onClick={()=>all()}>All</a></li>
           <li><a onClick={()=>inbox()}>Inbox</a></li>
           <li><a onClick={()=>social()}>Social</a></li>
           <li><a onClick={()=>sent()}>Sent</a></li>
           </ul>
          </div>
    )
  }
}

export default message