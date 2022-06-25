import React, { Component } from 'react'
import Input4b from './input4b'

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
            <div className="col-2 border"onClick={()=>this.viewCourseDetails(index)}>{ele.students.length}</div>
            <div className="col-4 border">
                <button className='btn btn-warning btn-sm mr-2'onClick={()=>this.editCource(index)}>Edit</button>
            <button  className='btn btn-danger btn-sm  mr-2'onClick={()=>this.deleteCource(index)}>Delete</button>
            </div></div>
        ))}
        
        
        <button className='btn btn-primary'onClick={()=>this.showForm()}>Add</button>
        </div>
        ):(

      <Input4b course={coursesIndex >= 0 ? courses[coursesIndex]:course}
      onSubmit={this.handelCource}
      edit={coursesIndex >=0}
      />
    );
  }
}


export default input4a
