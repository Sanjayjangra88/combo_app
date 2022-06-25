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
         cng:"Not Sort",
         p1:[]
      }
      priceSort=()=>{
        const {products}=this.state;
        let a2 ={...this.state}
        let a1=products.filter((ele)=>ele.price>=15)
        a2.p1=a1;
        this.setState(a2);
        console.log(a2.p1);
        }
      saleSort=()=>{
        console.log("hy")
      }
      valueSort=()=>{
        console.log("hy")
      }
     
  
    sort=(colnum)=>{
      const {products}=this.state;
      let a2 ={...this.state}
 
     if(colnum===0){
     a2= p1.sort((p1,p2)=>p1.name.localeCompare(p2.name));
     a2.cng="Sort by name";
     this.setState(a2);
    }
    else if(colnum===1){
       a2= products.sort((p1,p2)=>(+p1.price)-(+p2.price));
       a2.cng="Sort by price";
       this.setState(a2);
   }
    
    else if(colnum===2){
      a2= products.sort((p1,p2)=>(+p1.sales)-(+p2.sales));
      a2.cng="Sort by sales";
      this.setState(a2);
   }
    else{
      a2= products.sort((p1,p2)=>(+p1.price*p1.sales)-(+p2.price*p2.sales));
      a2.cng="Sort by value";
      this.setState(a2);
   }
    }
  render() {
      const {products,cng,p1}=this.state;
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
            {p1.map((p1) => {
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
            
            </div><br/><br/><br/>
         {/* {console.log({p1})}; */}
        </React.Fragment>
      )
        }
  
}

export default Evnt10
