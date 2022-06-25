import React, { Component } from 'react'

export class productTable extends Component {
    render() {
        const{products,Increment1,Decrement1,index}=this.props;
        const{name,code,price,quantity}=products;
        
      return (
          <React.Fragment>
              <div className="container">
           
        <div className="row bg-light m-1 ">
         <div className="col-2">{name}</div>
        <div className="col-2">{code}</div>
        <div className="col-2">{price}</div>
        <div className="col-2">{quantity}</div>
        <div className="col-1"><button  className="btn btn-success btn-sm "onClick={() =>Increment1(index)}>+</button></div>
        <div className="col-1"><button disabled={quantity<1} className="btn btn-danger btn-sm "onClick={() =>Decrement1(index)}>-</button></div>
      
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
