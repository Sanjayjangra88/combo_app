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
              <div className="col-3 border">Name</div>
              <div className="col-3 border text-center">Code</div>
              <div className="col-3 border text-center">Price</div>
              <div className="col-3 border text-center">Quantity</div>
              </div>
              {products.map((p1) => {
                let {name,code,price,quantity} = p1;
                return(
            
                  <div className="row border ">
                  <div className="col-3 border">{name}</div>
                  <div className="col-2 border text-center">{code}</div>
                  <div className="col-2 border text-center">{price}</div>
                  <div className="col-2 border text-center">{quantity}</div>
                  <div className="col-1 border text-center"><button  className="btn btn-light btn-sm m-2"onClick={() =>Increment()}>+</button></div>
                  <div className="col-1 border text-center"></div>
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
