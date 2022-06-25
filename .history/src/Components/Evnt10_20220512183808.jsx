import React, { Component } from 'react'

export class Evnt10 extends Component {
    state={
        products: [
        { name: "Perk", price: 10, sales: 7 },
        { name: "5Star", price: 15, sales: 9 },
        { name: "Pepsi", price: 20, sales: 20 },
        { name: "Maggi", price: 12, sales: 15},
        { name: "Coke", price: 20, sales: 50 },
        { name: "Lindt", price: 80, sales: 4 }
    ]}
  render() {
      const {products}=this.state;
      return (
        <React.Fragment>
        <div className="container">
           <div className="row border bg-dark text-white">
            <div className="col-6 border">Name</div>
            <div className="col-3 border text-center">Price</div>
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
            <div className="col-6 border"></div>
            <div className="col-3 border text-center"> TotalQuantity :{this.totalQty()}</div>
            <div className="col-3 border text-center">TotalSale : {this.totalsale()}</div>
            </div>
            )
            

    return (
        </div>
        </React.Fragment>
    )
  }
}

export default Evnt10
