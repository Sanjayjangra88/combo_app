import React, { Component } from 'react'

export class players1 extends Component {
  render() {
      const{name}=this.props;
      const{count,elphabet}=name;
    return <h5>Name {elphabet}</h5>
    
  }
}

export default players1