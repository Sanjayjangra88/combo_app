import React, { Component } from 'react'

 class Ex2 extends Component {
     state ={
        product: {
            code: "MDT311",price: 50,targetSales: 20,actualSales: 30
    }
     }
     target =(targetSales,actualSales)=>(actualSales<=targetSales ? "No": "Yes")
  render() {
      let {product} = this.state;
    return (
        <React.Fragment>
        let (code,price,targetSales,actualSales) = product
        
        <div className='col-3 border bg-warning'>
    
        Product Code :{code}<br/>
        Price:{price}<br/>
        Sale Target:{targetSales}<br/>
        Actual Sale:{actualSales}<br/>
        ActualSale Value:{actualSales*price}<br/>
         Actual Sale:{this.target(targetSales,actualSales)}<br/> 
        
        </div>
    </React.Fragment>
    )
  }
}

export default Ex2