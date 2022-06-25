import React, { Component } from 'react'

export class input6a extends Component {
    state={
        course:[],
        view:0
    }
  render() {

    return (
        <div className='container'>
        <button className='btb btn-primary'>Add Course</button><br/>
        <h5>Lists of Courses</h5>
        </div>
      
    )
  }
}

export default input6a