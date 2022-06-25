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
    
    return (
        <div className="col bg-warning  position:center">
        {products.map((p1) => {
              let {name,quantity,sales} = p1;
              return(
                // <div className="col-4 border">
          <li>{name}</li>
        // <br/>
        
    //   </div>
    )
              })}
              </div>
    )
  }
}

export default Ex4
