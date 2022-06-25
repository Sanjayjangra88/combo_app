import React, { Component } from 'react'

class SimpleAdd extends Component {
    state={
        a:20,
        b:22
    }

  render() {
      let {a,b}=this.state;
    return (
      <div>
      {a}
      </div>
    )
  }
}

export default SimpleAdd
