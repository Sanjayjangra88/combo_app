import React, { Component } from 'react'

export class players1 extends Component {
  render() {
      const{player}=this.props;
      const{names}=player;
    return (
      <h5>{names}</h5>
    )
  }
}

export default players1