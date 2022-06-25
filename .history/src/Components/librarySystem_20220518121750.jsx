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
  onHenelIssue=(index)=>{
    let s1={...this.state};
     let ele=s1.books[index];
     let str =s1.books.findIndex((ele1)=>ele1.name === ele.name)
    console.log(str);
    s1.books.splice(str,1);
    s1.issued.splice(1,0,ele);
    ele.issue = true;
    this.setState(s1)
  }
  onReturn=(index)=>{
    console.log(index)
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
        {issued.map((ele,index)=><li>{ele.name}<button className="btn btn-success btn-sm m-2"onClick={()=>this.onReturn(index)}>Return</button></li>)}
         
      </div>
    )
  }
}

export default LibrarySystem