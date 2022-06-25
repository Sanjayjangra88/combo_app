import React, { Component } from 'react'

export class Evnt9 extends Component {
    state={
        products:[{name:"Liril",sales:0},{name:"Lux",sales:0},{name:"Dove",sales:22},{name:"Pears",sales:25}],
        totalsale:'' ,
        bestSales:''

      }
   getopt =(n1)=>{
     alert(n1.name+" "+ "Sold");
   }
   getopt1 =(n1)=>{
     alert(n1.name+" "+ "Returned");
   }
   tot=()=>{
    let s2 ={...this.state}
    const {products}=this.state;
    var s1= products.reduce((acc,curr)=>acc+curr.sales,0)
    s2.totalsale=s1;
    this.setState(s2);
    }
   best=()=>{
    let s2 ={...this.state}
    const {products}=this.state;
    let s1= products.reduce((acc,curr)=>curr.sales>acc?curr.sales:acc,0)
    s2.bestSales=s1;
    this.setState(s2)
     
    
    }
    
  render() {
      const {products,totalsale,bestSales}=this.state;
     
    return (
      <ul>
          <button className='btn btn-primary m-2'onClick={() => this.tot()} >Total Sales</button>
          <button className='btn btn-primary m-2'onClick={() => this.best()} >Best Sales</button>
          {products.map((n1)=>(
          <li>Name: {n1.name} Sales: {n1.sales} <button className='btn btn-primary m-2'onClick={() => this.getopt(n1)} >Sell</button>{n1.sales>0 ? <button className='btn btn-success'onClick={() => this.getopt1(n1)}>Return</button>:"" }</li>
         
         ))}
         <h3>Total Sale: {totalsale}</h3> <h3>Best Sale: {bestSales}</h3>
         
        </ul>
        
        


      
    )
      
  }

  
}

export default Evnt9
