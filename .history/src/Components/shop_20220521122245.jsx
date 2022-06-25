
import React, { Component } from 'react'

export class shop extends Component {
    render() {
    const {mobiles,onCart,cart}=this.props;
    return (
      <React.Fragment>
       <div className="container text-center">
       <h4 >Products In Store</h4>
       
       <div className="row">
        
        
       
        <div className='row text-center'>
          {mobiles.map((p1,index) => {
            let {name,desc,price} = p1;
            return(
             
              <div className="col-3 border text-center bg-success m-2">
                       <h4>{name}({desc[0]})</h4>
                       <h5>{desc[1]}</h5>
                      <button className="btn btn-light btn-sm m-2"onClick={() =>onCart(index)}>Just {price}</button>
                    
                   </div>
                                )
                                
            })}
            
             </div>
          </div>
          </div><br/><br/><br/>
          <div className="container">
            <h3>Cart</h3>
          {(cart.length<1)?"Cart is empty":
          <div className="container">{cart.map((ele,index)=><ul><li>{ele.name},Quantity:{ele.qty}<button className="btn btn-primary btn-sm m-2"onClick={() =>onCart(index)}>Remove from Cart</button></li></ul>)
          }</div>}
          {(cart.length<1)?'':<div className='container'>Number of Items in Cart : {cart.reduce((acc,curr)=>acc+curr.qty,0)}</div>}
          {(cart.length<1)?'':<div className='container'>Value of Cart : {cart.reduce((acc,curr)=>acc+curr.price*curr.qty,0)}</div>}
         
          </div>
          
          
         
       {/* {console.log({p1})}; */}
       
      </React.Fragment>
      
    )

  
}

}


export default shop
