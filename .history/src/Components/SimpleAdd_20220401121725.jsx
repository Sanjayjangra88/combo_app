import React, { Component } from 'react'

class SimpleAdd extends Component {
    state={
        a:20,
        b:22
    }

  render() {
      let {a,b}=this.state;
    return (
    <React.Fragment>
        NO 1 is {a}
        NO 2 is {b}
        Sum is {a+b}
        Larger is {x>y ? x:y}
    </React.Fragment>
    )
  }
}

export default SimpleAdd
