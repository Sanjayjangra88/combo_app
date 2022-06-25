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
          </div>
      </React.Fragment>
    )
  }
}

export default MainComponents