import React, { Component } from 'react'

export class input6a extends Component {
    state={
        course:[],
        view:0
    }
    viewCourseDetails=()=>{
        console.log("hy")
        let s1={...this.state};
        return(
            <div className='conatiner'>
                <div className="form-group">
            <label>Add a cource</label>
            <input type="text" className='form-control'id='name'name='name' placeholder='Enter the name'onChange={this.handelChange}></input>
        </div>
            </div>
        )
        
    }
  render() {
      let{course,view}=this.state;

    return view === 0 ?(

        <div className='container'><br/>
        <button className='btb btn-primary'onClick={()=>this.viewCourseDetails()}>Add Course</button><br/><br/>
        <h5>Lists of Courses</h5>

        {course.length===0?"There are Zero Cources":course.length}
        </div>
      
    ):this.showCourseDetails()
  }
}

export default input6a