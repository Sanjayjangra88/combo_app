import React, { Component } from 'react'

export class message extends Component {

  render() {
      const{data}=this.props;
    return (
        <div className="slidebar">
           <ul>
              <li><a>Folders</a></li>
              <li><a>All</a></li>
              <li><a>Inbox</a></li>
              <li><a>Social</a></li>
              <li><a>Sent</a></li>
              </ul>
             </div>
    )
  }
}

export default message