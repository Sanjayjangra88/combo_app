import React, { Component } from 'react'

export class Books extends Component {
  render() {
    const{books}=this.props;
    // let str = books.filter((ele)=>ele.issue == false)
    // const{name,author,issue}=books;
    
    let str= books.filter((ele)=>ele.issue===false)
    console.log(str)

    return (
        <div className="col-5 border text-center m-2 bg-warning">
            {/* <h5>{name}</h5><br/>
            <h6>{author}</h6><br/> */}
            <button className="btn btn-success btn-sm m-2">Issue</button>

        </div>

        
     
    )
  }
}

export default Books
