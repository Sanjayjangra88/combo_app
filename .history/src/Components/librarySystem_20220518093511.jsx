import React, { Component } from 'react'
import Books from './books';

export class LibrarySystem extends Component {
  state={
    books:[
      {name:"Harry Porter",author:"JK Roling",issue:false},
      {name:"War and Peace",author:"Leo Tolstoy",issue:false},
      {name:"Malgudi Days",author:"RK Narayan",issue:false},
      {name:"Gitanjli",author:"RN Tegore",issue:false},
    ]
  }
  onHenelIssue=(index)=>{
    console.log("hy")
    console.log(index)
  }
  render() {
    const{books}=this.state;
    let str = books.filter((ele)=>ele.issue === false);
    console.log(str);

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