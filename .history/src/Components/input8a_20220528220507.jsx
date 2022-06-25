import React, { Component } from 'react'
import Input8b from './input8b'
import Input8c from './input8c'

export class input8a extends Component {
    state={
        students:[],
        view:0,
        total:[],
        viewIndex:-1,
        totIndex:-1,
        name:"",
        index:0
       
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
        s1.students.push(student);
        s1.view=0;
        s1.viewIndex=-1;
        this.setState(s1)
        
    }
    handelSubmitMarks=(marks)=>{
        let s1={...this.state};
    //  student[s1.totIndex].totalMarks.push(marks)
       
      //   s1.students[s1.totIndex].totalMarks.reduce((acc,curr)=>acc+parseInt(curr.math)+parseInt(curr.eng)+parseInt(curr.comp)+parseInt(curr.science),0)
        s1.view=1;     
        this.setState(s1)
        const{students}=this.state;
        const{totalMarks}=this.state.students;
        console.log(totalMarks)
      //   console.log(arr1)
      
  
      }
    edit=(index)=>{
        let s1={...this.state};
        s1.viewIndex = index;
        s1.view=2;
        this.setState(s1);
    }
    total=(index)=>{
      let s1={...this.state};
      let ele =s1.students[index];
      s1.view=3;
      s1.name=ele.name;
      s1.totIndex=index;
      this.setState(s1);
      console.log(ele.name)
         
    }
  render() {
      const{students,view,viewIndex,totIndex,name}=this.state;
      let student={name:"",course:"",year:"",totalMarks:0};
      let marks={math:"",eng:"",comp:"",science:""}
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
               
             {students.map((ele,index)=>
                <tr>
                <td className="col1">{ele.name}</td>
                <td className="col1">{ele.course}</td>
                <td className="col1">{ele.year}</td>
                <td className="col1">{ele.totalMarks}</td>
                <td className="col1"><button className='btn btn-danger btn-sm'onClick={()=>this.total(index)}>Enter</button></td>
            </tr>
        
            )
      }</div>
     )
     :view===2?
     <Input8b student={viewIndex >=0 ? students[viewIndex]:student}edit={viewIndex>=0} onSubmit={this.handelSubmit}/>
     :view===3?<Input8c marks={marks} onSubmitMarks={this.handelSubmitMarks}totIndex={totIndex}name={name}student={student}/>:""
     }
 
      </React.Fragment>    
    )
    
  }
}

export default input8a