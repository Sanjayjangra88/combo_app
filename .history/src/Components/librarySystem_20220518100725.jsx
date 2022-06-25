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
    let ele1=s1.issued[index];
    s1.books.splice(ele,1)
    s1.issued.push(ele);
    console.log(ele1);
    
    this.setState(s1)
    // console.log(ele);
  }
  render() {
    const{books}=this.state;
    let str = books.filter((ele)=>ele.issue === false);
    // console.log(str);

    return (
      <div className='container'>
        <div className="row">
          {str.map((ele,index)=>(
          <Books books={ele}index={index} onIssue={this.onHenelIssue} />))}
        </div>
      </div>
    )
  }
}

export default LibrarySystem