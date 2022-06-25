import React, { Component } from 'react'

export class Evnt11 extends Component {
    state={
        priceData: [{ name: "Perk", category:"Food", oldPrice: 10, newPrice: 10 },
                   { name: "5Star", category:"Food", oldPrice: 15, newPrice: 12 },
                   { name: "Pepsi", category:"Drink", oldPrice: 20, newPrice: 22 },
                   { name: "Maggi", category:"Food", oldPrice: 12, newPrice: 15 },
                   { name: "Coke", category:"Drink", oldPrice: 20, newPrice: 20 },
                   { name: "Gems", category:"Food", oldPrice: 10, newPrice: 10 },
                   { name: "7Up", category:"Drink", oldPrice: 15, newPrice: 17 },
                   { name: "Lindt", category:"Food", oldPrice: 80, newPrice: 90 },
                   { name: "Nutties", category:"Food", oldPrice: 20, newPrice: 18 },
                   { name: "Slice", category:"Drink", oldPrice: 18, newPrice: 16 }]
    }
    render() {
        const {priceData}=this.state;
        return (
          <React.Fragment>
            <h3>{cng}</h3><br/>
            <button className="btn btn-primary m-2" onClick={()=>this.priceSort()}>Price{'>'}=15</button>
            <button className="btn btn-primary m-2" onClick={()=>this.saleSort ()}>Sales{'>'}=10</button>
            <button className="btn btn-primary m-2" onClick={()=>this.valueSort()}>Value{'>'}=100</button>
          <div className="container">
             <div className="row border bg-dark text-white">
              <div className="col-3 border"onClick={() => this.sort(0)}>Name</div>
              <div className="col-3 border text-center"onClick={() => this.sort(1)}>Price</div>
              <div className="col-3 border text-center"onClick={() => this.sort(2)}>Sales</div>
              <div className="col-3 border text-center"onClick={() => this.sort(3)}>Value</div>
              </div>
              {priceData.map((p1) => {
                let {name,category,oldPrice,newPrice} = p1;
                return(
            
                  <div className="row border ">
                  <div className="col-3 border">{name}</div>
                  <div className="col-3 border text-center">{category}</div>
                  <div className="col-3 border text-center">{oldPrice}</div>
                  <div className="col-3 border text-center">{newPrice}</div>
                  </div>
                  )
                })}
              
              </div><br/><br/><br/>
             
           {/* {console.log({p1})}; */}
           
          </React.Fragment>
          
        )
          }
    
  }
export default Evnt11