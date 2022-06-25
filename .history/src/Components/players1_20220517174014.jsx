import React, { Component } from 'react'

export class players1 extends Component {
  render() {
      const{name}=this.props;
      const{count}=name;
    return <h5>Name {count}</h5>
    
  }
}

export default players1