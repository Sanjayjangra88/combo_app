import React, { Component } from 'react'

export class products extends Component {
  render() {
      const{products,Increment,Decrement,index}=this.props;
      const{name,code,price,quantity}=products;
      
    return (
        <React.Fragment>
        <div className="container text-center">
            <h4 >Products In Store</h4>
            <button  className="btn btn-warning btn-sm m-2 ">Order by Quantity</button>
            <button  className="btn btn-warning btn-sm m-2">Order by Price</button>
            </div>
        
        <div className="col-2 border text-center m-4 bg-primary my-4">
            <h4>{name}</h4>
            <h5>Code:{code}</h5>
            <h5>Price:{price}</h5>
            <h5>Quantity:{quantity}</h5>
            <button  className="btn btn-light btn-sm m-2"onClick={() =>Increment(index)}>Increase</button>
            <button disabled={quantity<1} className="btn btn-light btn-sm m-2"onClick={() =>Decrement(index)}>Decrease</button>
        
      </div>
      </React.Fragment>
    )
  }
}

export default products
