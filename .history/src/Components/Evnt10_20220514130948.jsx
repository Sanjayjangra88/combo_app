import React, { Component } from 'react'

export class Evnt10 extends Component {
    state={
        products: [
        { name: "Perk", price: 10, sales: 7 },
        { name: "5Star", price: 15, sales: 9 },
        { name: "Pepsi", price: 20, sales: 20 },
        { name: "Maggi", price: 12, sales: 15},
        { name: "Coke", price: 20, sales: 50 },
        { name: "Lindt", price: 80, sales: 4 }],
         sort:"Not Sort"
      }
  
    sort=(colnum,str)=>{
      const {products}=this.state;
      let a2 ={...this.state}
 
     if(colnum===0){
     let s1= products.sort((p1,p2)=>p1.name.localeCompare(p2.name));
      a2.name=s1;
      a2.sort=str;
      this.setState(s1);
    }
    else if(colnum===1){
      let s2= products.sort((p1,p2)=>(+p1.price)-(+p2.price));
      a2.price=s2;
      this.setState(s2);
   }
    
    else if(colnum===2){
      let s3= products.sort((p1,p2)=>(+p1.sales)-(+p2.sales));
      a2.price=s3;
      this.setState(s3);
   }
    else{
      let s4= products.sort((p1,p2)=>(+p1.price*p1.sales)-(+p2.price*p2.sales));
      a2.price=s4;
      this.setState(s4);
   }
    }
  render() {
      const {products,sort}=this.state;
      return (
        <React.Fragment>
          <h3>{sort}</h3>
        <div className="container">
           <div className="row border bg-dark text-white">
            <div className="col-3 border"onClick={() => this.sort(0)}>Name</div>
            <div className="col-3 border text-center"onClick={() => this.sort(1,"Sort By Name")}>Price</div>
            <div className="col-3 border text-center"onClick={() => this.sort(2)}>Sales</div>
            <div className="col-3 border text-center"onClick={() => this.sort(3)}>Value</div>
            </div>
            {products.map((p1) => {
              let {name,price,sales} = p1;
              return(
          
                <div className="row border ">
                <div className="col-3 border">{name}</div>
                <div className="col-3 border text-center">{price}</div>
                <div className="col-3 border text-center">{sales}</div>
                <div className="col-3 border text-center">{price*sales}</div>
                

                </div>
                
    )
              })}
              {/* <div className="row border bg-dark text-white">
            <div className="col-6 border"></div>
            <div className="col-3 border text-center"> TotalQuantity :{this.totalQty()}</div>
            <div className="col-3 border text-center">TotalSale : {this.totalsale()}</div>
            </div> */}
            
            </div>
        </React.Fragment>
      )
        }
  
}

export default Evnt10
