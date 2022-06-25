import React, { Component } from 'react'

export class Books extends Component {
  render() {
    const{books}=this.props;
    const{name,author,issue}=books;
    return (
        <div className="col-4 border text-center">
            {name}

        </div>

        
     
    )
  }
}

export default Books
