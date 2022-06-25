import React, { Component } from 'react'

export class input6a extends Component {
    state={
        course:[],
        view:0
    }
    viewCourseDetails=()=>{
        console.log("hy")
    }
  render() {
      let{course}=this.state;

    return (
        <div className='container'><br/>
        <button className='btb btn-primary'onClick={()=>this.viewCourseDetails()}>Add Course</button><br/><br/>
        <h5>Lists of Courses</h5>

        {course.length===0?"There are Zero Cources":course.length}
        </div>
      
    )
  }
}

export default input6a