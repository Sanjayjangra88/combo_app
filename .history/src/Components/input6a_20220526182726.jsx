import React, { Component } from 'react'
import Input6b from './input6b'

export class input6a extends Component {
    state={
        courses:[],
        view:0
    }
    viewCourseDetails=()=>{
        console.log("hy")
        let s1={...this.state};
        s1.view=1;
        this.setState(s1);
         }
         handelSubmit=(course)=>{
             console.log(course)
             let s1={...this.state};
            s1.courses.push(course)
            s1.view=0;
            this.setState(s1)
         }
         editCource=(index)=>{
             console.log(index)

         }
  render() {
      let{courses,view}=this.state;
      let course={name:""};

    return view === 0 ?(

        <div className='container'><br/>
        <button className='btb btn-primary'onClick={()=>this.viewCourseDetails()}>Add Course</button><br/><br/>
        <h5>Lists of Courses</h5>
        

        {courses.length===0?("There are Zero Cources"
        ):(
        <React.Fragment>
           { (courses.map((ele,index)=><ul><li>{ele.name}<button className='btn btn-primary mr-2'onClick={()=>this.editCource(index)}>Edit</button></li></ul>)
           )} </React.Fragment>)}
        </div>
      
    ):<Input6b course={course}onSubmit={this.handelSubmit}/>
    
  }
}

export default input6a