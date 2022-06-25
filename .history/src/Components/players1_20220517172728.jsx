import React, { Component } from 'react'

export class players1 extends Component {
  render() {
      const{player}=this.props;
      const{names}=player;
    return (
      <ul><li>{names}</li></ul>
    )
  }
}

export default players1