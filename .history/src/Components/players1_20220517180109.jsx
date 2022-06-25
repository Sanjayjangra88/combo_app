import React, { Component } from 'react'

export class players1 extends Component {
  render() {
      const{names}=this.props;
      const{name,score}=names;
      
    
    return  <h5 className='text-primary bg-light'>Name : {name}<br/>Score : {score}<br/><button>1 Point</button></h5>
    
  }
}

export default players1