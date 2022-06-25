import React, { Component } from 'react'

class Ex3 extends Component {
    state={
        students:[
        {name:"Bill Json",english:61,maths:55,computer:60},
        {name:"Mary Smith",english:75,maths:80,computer:82},
        {name:"Rex willioms",english:37,maths:37,computer:37,}
        ]};
    
        totalMarls =(s1,s2,s3)=>s1+s2+s3;
    
  render() {
      let {students}=this.state;
    return (
        <div className='col-3 border bg-warning'>
           this.totalMarls(students[0](english,maths,computer));
            </div>
    )
  }
}

export default Ex3