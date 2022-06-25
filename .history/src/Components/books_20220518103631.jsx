import React, { Component } from 'react'

export class Books extends Component {
  render() {
    const{books,onIssue,index}=this.props;
    const{name,author}=books;
    
    return (
        <div className="container">
        <div className="container">
        <div className="col-5 border text-center m-2 bg-warning">
            <h5>{name}</h5><br/>
            <h6>{author}</h6><br/>
            <button className="btn btn-success btn-sm m-2"onClick={()=>onIssue(index)}>Issue</button>
          </div>
        </div>
        <div className="container">hy</div>
        </div>
      

        
     
    );
   
  }
}

export default Books
