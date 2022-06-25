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
          <span className="badge badge-pill badge-primary">{count}</span>
              <h6>qty={qty}</h6>
              <span class="badge badge-pill badge-primary">Primary</span>

          </div>
      </React.Fragment>
    )
  }
}

export default MainComponents