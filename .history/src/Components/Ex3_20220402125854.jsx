import React, { Component } from 'react'

class Ex3 extends Component {
    state={
        students:[
        {name:"Bill Json",english:61,maths:55,computer:60},
        {name:"Mary Smith",english:75,maths:80,computer:82},
        {name:"Rex willioms",english:37,maths:37,computer:37,}
        ]};
    
        totalMarls =(s1,s2,s3)=>s1+s2+s3;
        grade =(total)=>{
           if (total>=225) 
           return "A" 
           else if (total>=180 )
           return "B" 
            else if(total>=150 )
            return "C" 
            else 
            return "D"
        };
    
  render() {
      let {students}=this.state;
      let {name,english,computer,maths} = students[0];
      
    return (
         <div className='col-3 border bg-warning'>
          Name:{name}<br/>
          English:{english}<br/>
          Maths:{maths}<br/>
          Computer:{computer}<br/>
          Total Marks:{this.totalMarls(english,maths,computer)}
          Grade {this.grade(this.totalMarls)}
            </div>
    )
  }
}

export default Ex3