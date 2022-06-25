import { render } from '@testing-library/react';
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
             
              <div className="col-3 border text-center bg-success m-1">
                       <h4>{name}({desc[0]})</h4>
                       <h5>{desc[1]}</h5>
                      <button className="btn btn-light btn-sm m-2"onClick={() =>onCart(index)}>Just {price}</button>
                    
                   </div>
                                )
                                
            })}<br/>
            
             </div>
          </div>
          </div>
          {cart}
         
       {/* {console.log({p1})}; */}
       
      </React.Fragment>
      
    )

  
}

}


export default shop
