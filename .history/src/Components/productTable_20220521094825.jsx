import React, { Component } from 'react'

export class productTable extends Component {
    render() {
        const {products,Increment,Decrement,sort}=this.props;
        return (
          <React.Fragment>
           <div className="container text-center">
            <h4 >Products In Store</h4>
            <button  className="btn btn-warning btn-sm m-2 "onClick={() =>sort(0)}>Order by Quantity</button>
            <button  className="btn btn-warning btn-sm m-2"onClick={() =>sort(1)}>Order by Price</button>
            <button  className="btn btn-warning btn-sm m-2">View Grid</button>
            </div> 
          <div className="container">
             <div className="row border bg-dark text-white">
              <div className="col-3 ">Name</div>
              <div className="col-2  text-center">Code</div>
              <div className="col-2  text-center">Price</div>
              <div className="col-2  text-center">Quantity</div>
              </div>
              {products.map((p1,index) => {
                let {name,code,price,quantity} = p1;
                return(
            
                  <div className="row border ">
                  <div className="col-3 ">{name}</div>
                  <div className="col-2  text-center">{code}</div>
                  <div className="col-2  text-center">{price}</div>
                  <div className="col-2  text-center">{quantity}</div>
                  <div className="col-1  text-center"><button className="btn btn-success btn-sm m-2"onClick={() =>Increment(index)}>+</button></div>
                  <div className="col-1  text-center"><button  disabled={quantity<1} className="btn btn-danger btn-sm m-2"onClick={() =>Decrement(index)}>-</button></div>
                  </div>
                  )
                })}
              
              </div><br/><br/><br/>
             
           {/* {console.log({p1})}; */}
           
          </React.Fragment>
          
        )
    
      
    }
  }

export default productTable
