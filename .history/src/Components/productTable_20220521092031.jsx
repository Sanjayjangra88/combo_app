import React, { Component } from 'react'

export class productTable extends Component {
    render() {
        const {product}=this.props;
        return (
          <React.Fragment>
            
          <div className="container">
             <div className="row border bg-dark text-white">
              <div className="col-3 border"onClick={() => this.sort(0)}>Name</div>
              <div className="col-3 border text-center"onClick={() => this.sort(1)}>Code</div>
              <div className="col-3 border text-center"onClick={() => this.sort(2)}>Price</div>
              <div className="col-3 border text-center"onClick={() => this.sort(3)}>Quantity</div>
              </div>
              {product.map((p1) => {
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
