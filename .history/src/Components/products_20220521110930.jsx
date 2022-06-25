import React, { Component } from 'react'

export class products extends Component {
  render() {
    const {products,Increment,Decrement,sort,view}=this.props;
    return (
      <React.Fragment>
       <div className="container text-center">
       <h4 >Products In Store</h4>
       <button  className="btn btn-warning btn-sm m-2 "onClick={() =>sort(0)}>Order by Quantity</button>
        <button  className="btn btn-warning btn-sm m-2"onClick={() =>sort(1)}>Order by Price</button>
        <button  className="btn btn-warning btn-sm m-2"onClick={() =>view()}>View Grid</button>
       <div className="row">
        
        
       
        <div className='row text-center'>
          {products.map((p1,index) => {
            let {name,code,price,quantity} = p1;
            return(
             
              <div className="col-3 border text-center bg-light m-2">
                       <h4>{name}</h4>
                       <h5>Code:{code}</h5>
                       <h5>Price:{price}</h5>
                       <h5>Quantity:{quantity}</h5>
                       <button  className="btn btn-light btn-sm m-2"onClick={() =>Increment(index)}>Increase</button>
                       <button disabled={quantity<1} className="btn btn-light btn-sm m-2"onClick={() =>Decrement(index)}>Decrease</button>
                    
                   </div>
                  
              )
            })}
             </div>
          </div>
          </div><br/><br/><br/>
         
       {/* {console.log({p1})}; */}
       
      </React.Fragment>
      
    )

  
}
  // render() {
  //     const{products,Increment,Decrement,index}=this.props;
  //     const{name,code,price,quantity}=products;
      
  //   return (
        
  //       <div className="col-2 border text-center m-4 bg-primary my-4">
  //           <h4>{name}</h4>
  //           <h5>Code:{code}</h5>
  //           <h5>Price:{price}</h5>
  //           <h5>Quantity:{quantity}</h5>
  //           <button  className="btn btn-light btn-sm m-2"onClick={() =>Increment(index)}>Increase</button>
  //           <button disabled={quantity<1} className="btn btn-light btn-sm m-2"onClick={() =>Decrement(index)}>Decrease</button>
        
  //     </div>
  //   )
  // }
}

export default products
