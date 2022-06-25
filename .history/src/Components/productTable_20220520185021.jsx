import React, { Component } from 'react'

export class productTable extends Component {
    render() {
        const{products,Increment,Decrement,index}=this.props;
        const{name,code,price,quantity}=products;
        
      return (
          <React.Fragment>
              <div className="container">
              <div className="row border bg-dark text-white">
              <div className="col-2 border">Name</div>
              <div className="col-2 border text-center">Code</div>
              <div className="col-2 border text-center">Price</div>
              <div className="col-2 border text-center">Quantity</div>
              </div> 
        <div className="row border m-1 ">
         <div className="col-2">{name}</div>
        <div className="col-2">{code}</div>
        <div className="col-2">{price}</div>
        <div className="col-2">{quantity}</div>
        <div className="col-2"><button  className="btn btn-light btn-sm "onClick={() =>Increment(index)}>+</button></div>
        <div className="col-2"><button  className="btn btn-light btn-sm "onClick={() =>Increment(index)}>-</button></div>
      
    </div>
    </div>
          
        {/* //   <div className="col-2 border text-center m-4 bg-primary my-4">
        //       <h4>{name}</h4>
            
        //       <button  className="btn btn-light btn-sm m-2"onClick={() =>Increment(index)}>Increase</button>
        //       <button disabled={quantity<1} className="btn btn-light btn-sm m-2"onClick={() =>Decrement(index)}>Decrease</button>
          
        // </div> */}
        </React.Fragment>
      )
      
    }
  }

export default productTable
