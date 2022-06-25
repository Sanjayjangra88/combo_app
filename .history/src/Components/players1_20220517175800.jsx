import React, { Component } from 'react'

export class players1 extends Component {
  render() {
      const{names}=this.props;
      const{name,score}=names;
      
    
    return  <h5 className='text-white bg-dark'>Name : {name}<br/>Score{score}</h5>
    
  }
}

export default players1