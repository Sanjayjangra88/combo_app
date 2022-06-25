import React, { Component } from 'react'
import Books from './books';

export class LibrarySystem extends Component {
  state={
    books:[
      {name:"Harry Porter",author:"JK Roling",issue:false},
      {name:"War and Peace",author:"Leo Tolstoy",issue:false},
      {name:"Malgudi Days",author:"RK Narayan",issue:false},
      {name:"Gitanjli",author:"RN Tegore",issue:false},
    ],
     issued:[]
  }
  onHenelIssue=(name)=>{
    let s1={...this.state};
    let str =s1.books.find((ele)=>ele.name === name)
    console.log(str)
    
    // s1.issued.splice(1,0,ele);
     
    //  console.log(s1.issued);
  }
  render() {
    const{books,issued}=this.state;
    let str = books.filter((ele)=>ele.issue === false);
    // console.log(str);

    return (
      <div className='container'>
        <h4 className='text-center'>Books in Library</h4>
        <div className="row">
          {str.map((ele,index)=>(
          <Books books={ele}index={index} onIssue={this.onHenelIssue} />))}
        </div>
        {books.length==0? <h3>Library is empty</h3>:''}
        <h4>Issued Books</h4>
        {issued.map((ele)=><li>{ele.name}<button className="btn btn-success btn-sm m-2">Issue</button></li>)}
         
      </div>
    )
  }
}

export default LibrarySystem