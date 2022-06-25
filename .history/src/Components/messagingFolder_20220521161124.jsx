import React, { Component } from 'react'

export class messagingFolder extends Component {
  render() {
    const{data}=this.props;
    return (
      <div class="slidebar slidebarGo">
  
      
          <ul>
              <li><a>Folders</a></li>
              <li><a href="/intro.html">All</a></li>
              <li><a href="/servive.html">Inbox</a></li>
              <li><a href="/blog.html">Social</a></li>
              <li><a href="/contact.html">Sent</a></li>
              </ul>
     
  </div>
    )
  }
}

export default messagingFolder
