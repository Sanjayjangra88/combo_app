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
    // let {emp} = this.state.employees;
     
    return (
        <div className='container'>
         {emp.map((p1)=>{
             let {name,level,dept,designation,salary} = p1;
             return(
               <div className='row border'>
               <div className="col border">{name} </div>
               <div className="col border text-center">{level} </div>
               <div className="col border text-center">{dept} </div>
               <div className="col border text-center">{designation}</div>
               <div className="col border text-center">{salary}</div> 
                </div>
                )
         })
        }
        </div>
    
        )

   }
   
   render(){
    let {emp} = this.state.employees;
    return   <React.Fragment>{this.employee(emp)}</React.Fragment>
    }
    
}

export default Ex7