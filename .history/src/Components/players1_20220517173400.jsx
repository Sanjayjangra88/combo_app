import React, { Component } from 'react'

export class players1 extends Component {
  render() {
      const{player}=this.props;
      const{names}=player;
    return (
      <li>{names}</li>
    )
  }
}

export default players1