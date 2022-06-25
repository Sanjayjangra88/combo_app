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
        this.setState(s1)
        
    }
    handelSubmitMarks=(marks)=>{
        let s1={...this.state};
        s1.total.push(marks)
        
        console.log(marks)
        
       s1.viewIndex > -1
       ?(s1.students[s1.viewIndex].totalMarks=marks):
        s1.students[s1.totIndex].totalMarks.push(marks);
        s1.totIndex=-1;
        s1.viewIndex=-1;
        s1.view=0;
        this.setState(s1);
       
     }
        edit=(index)=>{
        let s1={...this.state};
        s1.viewIndex = index;
        s1.view=3;
        console.log(s1.viewIndex)
        this.setState(s1);
       
        
    }
    total=(index)=>{
      let s1={...this.state};
      let ele =s1.students[index];
      s1.view=3;
      s1.totIndex=index;
      s1.name=ele.name;
      this.setState(s1);
      console.log(ele.name)
         
    }
  render() {
      const{students,view,viewIndex,totIndex,name,total}=this.state;
      let student={name:"",course:"",year:"",totalMarks:[]};
     
      
    
      
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
                <td className="col1">{ele.totalMarks.reduce((acc,curr)=>acc+parseInt(curr.math)+parseInt(curr.eng)+parseInt(curr.comp)+parseInt(curr.science),0)===0?"No Data":ele.totalMarks.reduce((acc,curr)=>acc+parseInt(curr.math)+parseInt(curr.eng)+parseInt(curr.comp)+parseInt(curr.science),0)}</td>
                <td className="col1">{ele.totalMarks.reduce((acc,curr)=>acc+parseInt(curr.math)+parseInt(curr.eng)+parseInt(curr.comp)+parseInt(curr.science),0)===0?<button className='btn btn-danger btn-sm'onClick={()=>this.total(index)}>Enter</button>:<button className='btn btn-danger btn-sm'onClick={()=>this.edit(index)}>Edit</button>}</td>
            </tr>
        
            )
      }</div>
     )
     :view===2?
     <Input8b student={student}onSubmit={this.handelSubmit}/>
     :view===3?
     
     <Input8c marks={viewIndex>-1 ? total:{}} onSubmitMarks={this.handelSubmitMarks}name={name}edit={viewIndex>-1}/>:""
     }
 
      </React.Fragment>    
    )
    
  }
}

export default input8a