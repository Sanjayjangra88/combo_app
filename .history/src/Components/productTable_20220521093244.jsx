import React, { Component } from 'react'

export class productTable extends Component {
    render() {
        const {products}=this.props;
        return (
          <React.Fragment>
           <div className="container text-center">
            <h4 >Products In Store</h4>
            <button  className="btn btn-warning btn-sm m-2 "onClick={() =>this.sort(0)}>Order by Quantity</button>
            <button  className="btn btn-warning btn-sm m-2"onClick={() =>this.sort(1)}>Order by Price</button>
            <button  className="btn btn-warning btn-sm m-2">View Grid</button>
            </div> 
          <div className="container">
             <div className="row border bg-dark text-white">
              <div className="col-3 border"onClick={() => this.sort(0)}>Name</div>
              <div className="col-3 border text-center"onClick={() => this.sort(1)}>Code</div>
              <div className="col-3 border text-center"onClick={() => this.sort(2)}>Price</div>
              <div className="col-3 border text-center"onClick={() => this.sort(3)}>Quantity</div>
              </div>
              {products.map((p1) => {
                let {name,code,price,quantity} = p1;
                return(
            
                  <div className="row border ">
                  <div className="col-3 border">{name}</div>
                  <div className="col-3 border text-center">{code}</div>
                  <div className="col-3 border text-center">{price}</div>
                  <div className="col-3 border text-center">{quantity}</div>
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
