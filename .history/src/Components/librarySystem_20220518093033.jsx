import React, { Component } from 'react'
import Books from './books';

export class LibrarySystem extends Component {
  state={
    books:[
      {name:"Harry Porter",author:"JK Roling",issue:false},
      {name:"War and Peace",author:"Leo Tolstoy",issue:true},
      {name:"Malgudi Days",author:"RK Narayan",issue:false},
      {name:"Gitanjli",author:"RN Tegore",issue:false},
    ]
  }
  render() {
    const{books}=this.state;
    console.log(books);
    let str = books.filter((ele)=>ele.issue === false);
    console.log(str);

    return (
      <div className='container'>
        <div className="row">
          {books.map((ele,index)=>(
          <Books books={ele}index={index} />))}
        </div>
      </div>
    )
  }
}

export default LibrarySystem