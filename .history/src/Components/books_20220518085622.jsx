import React, { Component } from 'react'

export class Books extends Component {
  render() {
    const{books}=this.props;
    const{name,author,issue}=books;
    return (
        <div className="col-4 border text-center">
            <h5>{name}</h5><br/>
            <h6>{author}</h6><br/>

        </div>

        
     
    )
  }
}

export default Books
