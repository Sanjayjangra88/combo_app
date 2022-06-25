import React, { Component } from 'react'

export class productTable extends Component {
    render() {
        const{products,Increment,Decrement,index}=this.props;
        const{name,code,price,quantity}=products;
        
      return (
          <React.Fragment>
        <div className="container">
        <div className="row bg-light m-1 ">
         <div className="col-2">{name}</div>
        <div className="col-2">{code}</div>
        <div className="col-2">{price}</div>
        <div className="col-2">{quantity}</div>
        <div className="col-1"><button  className="btn btn-success btn-sm "onClick={() =>Increment(index)}>+</button></div>
        <div className="col-1"><button disabled={quantity<1} className="btn btn-danger btn-sm "onClick={() =>Decrement(index)}>-</button></div>
      
    </div>
    </div>
        </React.Fragment>
      )
      
    }
  }

export default productTable
