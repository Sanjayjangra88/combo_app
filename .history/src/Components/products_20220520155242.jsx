import React, { Component } from 'react'

export class products extends Component {
  render() {
      const{products}=this.props;
      const{name,code,price,quantity}=products;
    return (
        <div className="col-2 border text-center m-4 bg-primary">
            <h4>{name}</h4>
            <h5>Code:{code}</h5>
            <h5>Price:{price}</h5>
            <h5>Quantity:{quantity}</h5>
            <button className="btn btn-light btn-sm m-2">Increase</button>
            <button className="btn btn-light btn-sm m-2">Increase</button>
        
      </div>
    )
  }
}

export default products
