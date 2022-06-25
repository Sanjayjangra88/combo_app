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
  render() {
      let {product} = this.state;
    return (
        <React.Fragment>
        <div className='col-3 border bg-warning'>
    
        NAME :{product.code}<br/>
        Company:{product.price}<br/>
        Department:{product.targetSales}<br/>
        Designation:{product.actualSales}<br/>
        </div>
    </React.Fragment>
    )
  }
}

export default Ex2