import React, { Component } from 'react'

export class players1 extends Component {
  render() {
      const{name}=this.props;
      
    
    return  <h5 className='text-white bg-dark'>{name}</h5>
    
  }
}

export default players1