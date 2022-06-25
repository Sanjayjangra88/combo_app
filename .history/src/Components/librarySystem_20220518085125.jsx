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
  render() {
    const{books}=this.state;
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