import React, { Component } from 'react'

export class Evnt9 extends Component {
    state={
        products:[
        {name:"Pepsi",sales:10},{name:"Coke",sales:7},{name:"Maggi",sales:0},{name:"Gems",sales:15},{name:"5Star",sales:0}
   ] }
   getopt =()=>{
     console.log('hello');
     alert("Sold");
   }
  render() {
      const {products}=this.state;
      let product1 = [...products];
    return (
        <ul>
{products.map((n1)=>(
        <li>Name: {n1.name} Sales: {n1.sales} <button className='btn btn-primary m-2'onClick={() => this.getopt()}>Sell</button></li>
         
         ))}
        </ul>
        


      
    )
  }
  
}

export default Evnt9
