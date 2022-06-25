import React, { Component } from 'react'

export class Books extends Component {
  render() {
    const{books}=this.props;
    const{name,author,issue}=books;
    return (
        <div className="col-4 border text-center">
            <h6>{name}</h6><br/>
            <h6>{author}</h6><br/>

        </div>

        
     
    )
  }
}

export default Books
