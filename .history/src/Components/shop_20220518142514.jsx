import React, { Component } from 'react'

export class shop extends Component {
  render() {
      const{mobile}=this.props;
      const{name,desc,price}=mobile
    return (
        <div className="col-3 border text-center m-5 bg-warning">
        <h5>{name}</h5><br/>
        <h6>{price}</h6><br/>
        
      </div>
    )
  }
}

export default shop
