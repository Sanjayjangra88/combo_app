import React, { Component } from 'react'

class Evnt5 extends Component {
    state={
        num:0,
    }
  render() {
    return (
     <React.Fragment>
         <button className='btn btn-primary me-2'>Add 1</button>
         <button className='btn btn-primary me-2'>Add 10</button>
         <button className='btn btn-primary'>Add 100</button>
     </React.Fragment>
    )
  }
}

export default Evnt5