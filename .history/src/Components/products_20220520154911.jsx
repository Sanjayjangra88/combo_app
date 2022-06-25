import React, { Component } from 'react'

export class products extends Component {
  render() {
      const{products}=this.props;
      const{name,code,price,quantity}=products;
    return (
        <div className="col-2 border text-center m-4 bg-primary">
            <h4>{name}</h4>
            <h4>{code}</h4>
            <h5>{price}</h5>
        
      </div>
    )
  }
}

export default products
