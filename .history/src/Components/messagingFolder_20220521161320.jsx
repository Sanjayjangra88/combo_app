import React, { Component } from 'react'

export class messagingFolder extends Component {
  render() {
    const{data}=this.props;
    return (
      <div class="slidebar slidebarGo">
  
      
          <ul>
              <li><a>Folders</a></li>
              <li><a onClick={()=>all}>All</a></li>
              <li><a onClick={()=>all}>Inbox</a></li>
              <li><a onClick={()=>all}>Social</a></li>
              <li><a onClick={()=>all}>Sent</a></li>
              </ul>
     
  </div>
    )
  }
}

export default messagingFolder
