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
        
        NO 1 is {a}<br/>
        NO 2 is {b}<br/>
        Sum is {a+b}<br/>
        Larger is {a>b ? a:b}
    </React.Fragment>
    )
  }
}

export default SimpleAdd
