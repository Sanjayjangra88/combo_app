import React, { Component } from 'react'
import Input4b from './input4b'

export class input4a extends Component {
    state={
        courses:[
            {name:"JavaScricpt",faculity:"Bill",lectures:20},
            {name:"React",faculity:"Steave",lectures:28},
        ],
        view:0,
        coursesIndex:-1,
    }
  render() {
      let course = {name:"",faculity:"",lectures:""};
      let {courses,view,coursesIndex}=this.state;
    return view === 0 ? (
        <div className="container">
        {courses.map((ele,index)=>(
            <div className="row">
            <div className="col-3 border">{ele.name}</div>
            <div className="col-3 border">{ele.faculity}</div>
            <div className="col-2 border">{ele.lectures}</div>
            <div className="col-4 border">
                <button className='btn btn-warning btn-sm mr-2'onClick={()=>this.editCource(index)}>Edit</button>
            <button  className='btn btn-warning btn-sm  mr-2'onClick={()=>this.deleteCource(index)}>Delete</button>
            </div></div>
        ))}
        
        
        <button className='btn btn-primary'onClick={()=>this.showForm()}>Add</button>
        </div>
        ):(

      <Input4b
      course={coursesIndex >= 0 ? courses[coursesIndex]:cources}
      onSubmit={this.handelCource}
      edit={coursesIndex >=0}
      />
    );
  }
}


export default input4a
