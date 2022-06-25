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
     getColor =(qty,sale)=>(qty>=sale ? "bg-success" :"bg-danger")


  render() {
       let {products} = this.state;
    return (
        <React.Fragment>
        <div className="container">
           <div className="row border bg-dark text-white">
            <div className="col-6 border">Name</div>
            <div className="col-3 border text-center">Quantity</div>
            <div className="col-3 border text-center">Sales</div>
            </div>
        {products.map((p1) => {
              let {name,quantity,sales} = p1;
              return(
          
                <div className={"row border " +this.getColor(quantity,sales)}>
                <div className="col-6 border">{name}</div>
                <div className="col-3 border text-center">{quantity}</div>
                <div className="col-3 border text-center">{sales}</div>
                </div>
                
    )
              })}
              <div className="row border bg-dark text-white">
            <div className="col-6 border">Name</div>
            <div className="col-3 border text-center">Quantity</div>
            <div className="col-3 border text-center">Sales</div>
            </div>
              </div>
             
              </React.Fragment>
    )
  }
}

export default Ex4
