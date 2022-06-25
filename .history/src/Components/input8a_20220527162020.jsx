import React, { Component } from 'react'
import Input8b from './input8b'
import Input8c from './input8c'

export class input8a extends Component {
    state={
        students:[],
        view:0,
        viewIndex:-1,
        totIndex:-1
    }
    ok=()=>{
        let s1={...this.state};
        s1.view=2;
        this.setState(s1)
        console.log("hy")
    }
    list=()=>{
        let s1={...this.state};
        s1.view=1;
        this.setState(s1)
        console.log("hy")
    }
    handelSubmit=(student)=>{
        console.log("hy")
        let s1={...this.state};
        s1.viewIndex >=0 
        ? s1.students[s1.viewIndex]=student
        : s1.students.push(student);
        s1.view=0;
        s1.viewIndex=-1;
        this.setState(s1)
    }
    edit=(index)=>{
        let s1={...this.state};
        s1.viewIndex = index;
        s1.view=2;
        this.setState(s1);
    }
    total=(index)=>{
        console.log(index)
        let s1={...this.state};
        s1.totIndex = index;
        s1.view=3;
        this.setState(s1);
    }
  render() {
      const{students,view,viewIndex}=this.state;
      let student={name:"",course:"",year:""}
    return(
        <React.Fragment>
      <div className='container'><br/>
      <h5>Welcome to the Students management system</h5><br/>
          <button className='btn btn-primary btn-sm mr-2'onClick={()=>this.ok()}>New Student</button>
          <button className='btn btn-primary btn-sm'onClick={()=>this.list()}>List of Students</button>
          <br/><br/></div>

       {view===1?
      (students.length===0
        ?
        <div className='container'>There are no studenter</div>
        :
          <div className="container">
              <tr className='bg-success text-white'>
                  <td className='th1'>Name</td>
                  <td className='th1'>Course</td>
                  <td className='th1'>Year</td>
                  <td className='th1'>Total Marks</td>
                  <td className='th1'>Reasult</td>
              </tr>
                 {/* <div className='row bg-success text-white'>
                <div className="col-4 border">Name</div>
                <div className="col-3 border">Course</div>
                <div className="col-3 border">Year</div>
                <div className="col-3 border"></div>
            </div> */}
             {students.map((ele,index)=>
                <tr>
                <td className="col1">{ele.name}</td>
                <td className="col1">{ele.course}</td>
                <td className="col1">{ele.year}</td>
                <td className="col1">{}</td>
                {/* <td className="col1"><button className='btn btn-danger btn-sm'onClick={()=>this.edit(index)}>Edit</button></td> */}
                <td className="col1"><button className='btn btn-danger btn-sm'onClick={()=>this.total(index)}>Enter</button></td>
            </tr>
        
            )
      }</div>
     )
     :view===2?
     <Input8b student={viewIndex >=0 ? students[viewIndex]:student}edit={viewIndex>=0} onSubmit={this.handelSubmit}/>
     :<Input8c/>
     }
 
      </React.Fragment>    
    )
    
  }
}

export default input8a