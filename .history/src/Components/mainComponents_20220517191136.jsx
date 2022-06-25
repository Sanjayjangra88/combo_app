import React, { Component } from 'react'
import Navbar from './navbar'

export class MainComponents extends Component {
  render() {
      let count=10;
      let qty=24;
    return (
      <React.Fragment>
          <Navbar count={count} qty={qty}/>
          <div className="container">
              <h6>count={count}</h6>
              <h6>qty={qty}</h6>
              <span class="badge badge-pill badge-primary">Primary</span>
<span class="badge badge-pill badge-secondary">Secondary</span>
<span class="badge badge-pill badge-success">Success</span>
<span class="badge badge-pill badge-danger">Danger</span>
<span class="badge badge-pill badge-warning">Warning</span>
<span class="badge badge-pill badge-info">Info</span>
<span class="badge badge-pill badge-light">Light</span>
<span class="badge badge-pill badge-dark">Dark</span>
          </div>
      </React.Fragment>
    )
  }
}

export default MainComponents