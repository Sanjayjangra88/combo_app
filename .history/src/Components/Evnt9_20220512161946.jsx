import React, { Component } from 'react'

export class Evnt9 extends Component {
    state={
        products:[
        {name:"Pepsi",sales:10},{name:"Coke",sales:7},{name:"Maggi",sales:0},{name:"Gems",sales:15},{name:"5Star",sales:0}
   ] }
   getopt =(n1)=>{
     alert(n1.name+" "+ "Sold");
   }
   getopt1 =(n1)=>{
     alert(n1.name+" "+ "Returned");
   }
   tot=()=>{
    const {products}=this.state;
    let s1= products.reduce((acc,curr)=>acc+curr.sales,0)
    console.log(s1)
    }
  render() {
      const {products}=this.state;
     
    return (
      <ul>
          <button className='btn btn-primary m-2'onClick={() => this.tot()} >Total Sales</button>
          <button className='btn btn-primary m-2' >Best Sales</button>
          {products.map((n1)=>(
          <li>Name: {n1.name} Sales: {n1.sales} <button className='btn btn-primary m-2'onClick={() => this.getopt(n1)} >Sell</button>{n1.sales>0 ? <button className='btn btn-success'onClick={() => this.getopt1(n1)}>Return</button>:"" }</li>
         
         ))}
        </ul>
        


      
    )
  }
  
}

export default Evnt9
