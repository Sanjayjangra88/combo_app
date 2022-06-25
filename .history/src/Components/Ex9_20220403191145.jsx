import React, { Component } from 'react'
class Ex9 extends Component {
    state={
        employees : [
            {name:"Jack Smith", level:2, dept:"Tech", designation:"Manager", salary:24000},
            {name:"Mary Robbins", level:3, dept:"Fin", designation:"Manager", salary:28000},
            {name:"Steve Williams", level:4, dept:"Ops", designation:"President", salary:35000},
            {name:"Bob Andrews", level:1, dept:"Fin", designation:"Trainee", salary:16500},
            {name:"Dave Martin", level:2, dept:"Fin", designation:"Manager", salary:21700},
            {name:"Julia Clarke", level:3, dept:"Ops", designation:"Manager", salary:26900},
            {name:"Kathy Jones", level:4, dept:"Tech", designation:"President", salary:42500},
            {name:"Tom Bresnan", level:2, dept:"Tech", designation:"Manager", salary:22200}
        ]
}
totalEmp=()=>{
    const {employees} = this.state;
    // let str =0;
    // for(let i=0;i<employees.length;i++)
    // {
    //     str = str+1;
    // }
    // var count = Object.keys(employees).length
    // return str;
    return employees.length;
}

totalSlry=()=>{
    const {employees} = this.state;
    return employees.reduce((acc,curr)=>acc+curr.salary,0);
}
avrgSlry=()=>{
    const {employees} = this.state;
    return employees.reduce((acc,curr)=>acc+curr.salary/employees.length,0);
}
maxSlry=()=>{
    const {employees} = this.state;
    return employees.reduce((acc,curr)=> acc > curr.salary ? acc : curr.salary);
}
minSlry=()=>{
    const {employees} = this.state;
    return employees.reduce((acc,curr)=> acc < curr.salary ? acc : curr.salary);
}
tech=()=>{
    const {employees} = this.state;
    return employees.reduce((acc,curr)=>{
        if(curr.dept=="Tech"){
          acc++;
        }
        return acc;
         
 },"")
}
ops=()=>{
    const {employees} = this.state;
    return employees.reduce((acc,curr)=>{
        if(curr.dept=="Ops"){
          acc++;
        }
        return acc;
         
 },"")
}
fin=()=>{
    const {employees} = this.state;
    return employees.reduce((acc,curr)=>{
        if(curr.dept=="Fin"){
          acc++;
        }
        return acc;
         
 },"")
}

  employee =(emp)=>{
     

    return (
        
       <div className='container'>
           <div className="row">
              <h2 className='text-center'>Welcome To Employees Details</h2>
            
         {emp.map((p1)=>{
             let {name,level,dept,designation,salary} = p1;
             return(
                <div className='col-3 border text-center'>
               
              
              <h3 className='text-solid-black'> {name}</h3> <br/>
               
             Deptartment: {dept} <br/>
             Designation: {designation} <br/>
            </div>
                )})}
                <div className="row border bg-warning">
                    <div className="col-7 text-center">Empolyee Details
                     <div className='container'>Number of Employees : {this.totalEmp()} </div>  
                     <div className='container'>Tech : {this.tech()} </div>  
                     <div className='container'>Fin : {this.fin()} </div>  
                     <div className='container'>Ops: {this.ops()} </div>
                                      
                    </div>
                    <div className="col-3 text-center">Salary Details 
                    <div className='container'>Total Salary : {this.totalSlry()}</div>
                    <div className='container'>Average Salary : {this.avrgSlry()}</div>
                    <div className='container'>Max Salary : {this.maxSlry()}</div> 
                    <div className='container'>Min Salary : {this.minSlry()}</div></div>
                    
                     
                </div>
        </div>
        </div>
        
        )}
   render(){
    let emp = this.state.employees;
    return   <React.Fragment>{this.employee(emp)}</React.Fragment>
    
    }
    
}

export default Ex9