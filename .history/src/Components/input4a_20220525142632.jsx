import React, { Component } from 'react'
import Input4b from './input4b'
import StudentForm from './studentForm'

export class input4a extends Component {
    state={
        courses:[
            {name:"JavaScricpt",faculity:"Bill",lectures:20,students:[]},
            {name:"React",faculity:"Steave",lectures:28,students:[]},
        ],
        view:0,
        coursesIndex:-1,
        viewCourseIndex:-1
    }
    handelCource=(course)=>{
        console.log("hello",course)
      let s1={...this.state};
      s1.coursesIndex >= 0
       ? (s1.courses[s1.coursesIndex]=course)
       : s1.courses.push(course);
      s1.view = 0;
      s1.coursesIndex=-1;
      this.setState(s1);
      console.log("hy")
    
    }
    handelStudents=(student)=>{
        console.log("hello",student)
      let s1={...this.state};
     s1.courses[s1.viewCourseIndex].students.push(student)
     s1.view=2;
      this.setState(s1);
      console.log("hy")

    }
    showForm=()=>{
      let s1={...this.state};
      s1.view = 1;
      this.setState(s1);
      console.log("hy")
      
    }
    editCource=(index)=>{
      console.log(index)
      let s1={...this.state};
      s1.view = 1;
      s1.coursesIndex = index
      this.setState(s1);
      console.log("hy")
    }

    deleteCource=(index)=>{
        let s1 ={...this.state};
        s1.courses.splice(index,1);
        this.setState(s1);

    }
    viewCourseDetails=(index)=>{
        console.log(index)
        let s1={...this.state};
        s1.view = 2;
        s1.viewCourseIndex = index
        this.setState(s1);
        console.log("hy")

    }
    showCourseDetails=()=>{
        console.log("hy")
        let {courses,viewCourseIndex,view}=this.state;
        let {name,faculity,lectures,students}=courses[viewCourseIndex];
        return(<div className='container'>
            <h5>Course Name : {name}</h5>
            <h5>Facualty : {faculity}</h5>
            <h5>Number of Lectures : {lectures}</h5>
            <h5>Number of Students : {students.length}</h5>
            {students.length===0 ? (
                ""
                ):(
            <React.Fragment>
            {students.map((ele=><div className='row'>
                <div className="col-6 border">{ele.id}</div>
                <div className="col-6 border">{ele.name}</div>
            </div>
            ))}
            </React.Fragment>
                )}

        {view===2 ?(
            <button className='btn btn-primary btn-sm mr-2'onClick={()=>this.showStudentForm()}>Enroll more Students</button>              
          
     ):(
         <StudentForm student={{}} onSubmit={this.handelStudents}/>
        )} <br/><br/>
         <button className='btn btn-primary btn-sm mr-2'onClick={()=>this.showCourseList()}>Lists of More Course</button>              
                
        </div>
        )

    }
    showCourseList=()=>{
        
        let s1={...this.state};
        s1.view = 0;
        s1.viewCourseIndex = -1
        this.setState(s1);
        console.log("hy")

    }
    showStudentForm=()=>{
        let s1={...this.state}
        console.log("by")
        s1.view = 3;
        this.setState(s1);

    }
    showEnrolStudents=()=>{

    }
  render() {
      let course = {name:"",faculity:"",lectures:""};
      let {courses,view,coursesIndex}=this.state;
    return view === 0 ? (
        <div className="container">
        {courses.map((ele,index)=>(
            <div className="row">
            <div className="col-3 border">{ele.name}</div>
            <div className="col-2 border">{ele.faculity}</div>
            <div className="col-2 border">{ele.lectures}</div>
            <div className="col-1 border"onClick={()=>this.viewCourseDetails(index)}>{ele.students.length}</div>
            <div className="col-4 border">
                <button className='btn btn-warning btn-sm mr-2'onClick={()=>this.editCource(index)}>Edit</button>
            <button  className='btn btn-danger btn-sm  mr-2'onClick={()=>this.deleteCource(index)}>Delete</button>
            </div></div>
        ))}
        
        
        <button className='btn btn-primary'onClick={()=>this.showForm()}>Add</button>
        </div>
        ):view===1 ?(

      <Input4b course={coursesIndex >= 0 ? courses[coursesIndex]:course}
      onSubmit={this.handelCource}
      edit={coursesIndex >=0}
      />
    ):view===2 ? this.showCourseDetails():this.showCourseDetails();
  }
}


export default input4a
