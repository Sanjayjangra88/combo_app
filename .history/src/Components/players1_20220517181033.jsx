import React, { Component } from 'react'

export class players1 extends Component {
  render() {
      const{names,addPoint,index}=this.props;
      const{name,score}=names;
      
    
    return  <h5 className='text-primary bg-light'>Name : {name}<br/>Score : {score}<br/><button className='btn btn-success btn-sm m-2'onClick={()=>addPoint(index)}>1 Point</button></h5>
    
  }
}

export default players1