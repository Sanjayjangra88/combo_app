import React, { Component } from 'react'

export class messagingFolder extends Component {
  render() {
    const{data}=this.props;
    return (
      <div class="slidebar slidebarGo">
  
      
          <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/intro.html">Intro</a></li>
              <li><a href="/servive.html">Services</a></li>
              <li><a href="/blog.html">Blog</a></li>
              <li><a href="/contact.html">Contact us</a></li>
              </ul>
     
  </div>
    )
  }
}

export default messagingFolder
