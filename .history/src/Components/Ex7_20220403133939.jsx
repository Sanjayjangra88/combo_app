import React, { Component } from 'react'
class Ex7 extends Component {
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
  employee =(emp)=>{
    //   let a1 =[...emp];
    // a1.sort((a,b) => a.name.localeCompare(b.name)); sort by namne .........
    // a1.sort((s1,s2)=>s1.salary-s2.salary);  sory by salary....................
    const st1 = emp.filter((name)=>name.maths+name.english>=50);
      console.log(st1);

    return (
        
       <div className='container'>
         {st1.map((p1)=>{
             let {name,level,dept,designation,salary} = p1;
             return(
               <div className='row border'>
               <div className="col border">{name} </div>
               <div className="col border text-center">{level} </div>
               <div className="col border text-center">{dept} </div>
               <div className="col border text-center">{designation}</div>
               <div className="col border text-center">{salary}</div> 
                </div>
                )})}
        </div>
        )}
   render(){
    let emp = this.state.employees;
    return   <React.Fragment>{this.employee(emp)}</React.Fragment>
    }
    
}

export default Ex7