import React, { Component } from 'react'

 class Ex4 extends Component {
     state={
        products: [
        { name: "Perk", quantity: 10, sales: 7 },
        { name: "5Star", quantity: 7, sales: 9 },
        { name: "Pepsi", quantity: 10, sales: 20 },
        { name: "Maggi", quantity: 41, sales: 22 },
        { name: "Coke", quantity: 18, sales: 50 }
        ]
     };


  render() {
       let {products} = this.state;
       const st1 = products.filter((name)=>name.sales>=name.quantity);
    
    return (
        <div className="col">
                 <h2>All Details</h2>
        {st1.map((p1) => {
              let {name,quantity,sales} = p1;
              return(
           
          <li>Name : {name} , Quantity : {quantity} , Sales : {sales}</li>
        // <br/>
        
    //   </div>
    )
              })}
              </div>
    )
  }
}

export default Ex4
