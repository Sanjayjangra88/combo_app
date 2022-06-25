import React, { Component } from 'react'

class Ex6 extends Component {
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
  render() {
      const {employees} = this.state;
      
    return (
    <div className='container'>
     {employees.map((p1)=>{
         let {name,level,dept,designation,salary} = p1;
         return(
           <div className='row-6 border'>
           <div className="col-3 border">NAME        {name} </div>
           <div className="col-3 border">LEVEL       {level} </div>
           <div className="col-3 border">DEPT        {dept} </div>
           <div className="col-3 border">DESIGINATION{designation}</div>
           <div className="col-3 border">SALARY      {salary}</div>
            </div>
            )
     })
    }
    </div>

    )
  }
}

export default Ex6