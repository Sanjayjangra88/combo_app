import React, { Component } from 'react'

 class Ex2 extends Component {
     state ={
        product: {
        code: "PRD341",
        price: 24,
        targetSales: 10,
        actualSales: 8
    }
     }
     target =(targetSales,actualSales)=>(actualSales>=targetSales ? "No": "Yes")
  render() {
      let {product} = this.state;
    return (
       
        <div className='col-3 border bg-warning'>
    
        Product Code :{product.code}<br/>
        Price:{product.price}<br/>
        Sale Target:{product.targetSales}<br/>
        Actual Sale:{product.actualSales}<br/>
        ActualSale Value:{product.actualSales*product.price}<br/>
         Actual Sale:{this.target(product.targetSales,product.actualSales)}<br/> 
        
        </div>
        
   
    )
    return(
    <div className='col-3 border bg-warning'>
    
    Product Code :{product.code}<br/>
    Price:{product.price}<br/>
    Sale Target:{product.targetSales}<br/>
    Actual Sale:{product.actualSales}<br/>
    ActualSale Value:{product.actualSales*product.price}<br/>
     Actual Sale:{this.target(product.targetSales,product.actualSales)}<br/> 
    
    </div>
    )
  }
}

export default Ex2