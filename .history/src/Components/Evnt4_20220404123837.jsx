import React, { Component } from 'react'

 class Evnt4 extends Component {
     state={
         prducts :[
             {name :"Pepsi",price:20},
             {name :"Dairy Milk",price:40},
             {name :"Maggie",price:15},
             {name :"Snakers",price:50},
             {name :"Nectface",price:100},
         ],
         cart:[],
     }
     showCart=()=>{
         const {cart}=this.state;
         if(cart.length === 0)return <h4>Cart is Empty</h4>;
         return (
         <ul>
             {cart.map((item)=>{
                 let {name,price,qty}=item;
                 return(
                     <li>{name},Price={price},qty={qty}</li>
                 )
       })}
         </ul>
         );
     };
     showProduct = ()=>{
         const {prducts} = this.state;
         return(
             <React.Fragment>
             <div className="row bg-dark text-white">
                 <div className="col-4">Name</div>
                 <div className="col-4">Price</div>
                 <div className="col-4"></div>
             </div>
             {prducts.map((pr,index)=>{
                 let {name,price} = pr;
                 return(
                    <div className="row">
                    <div className="col-4">{name}</div>
                    <div className="col-4">{price}</div>
                    <div className="col-4"><button className='btn btn-primary btn-sm'onClick={()=>this.addToCart(index)}>Add</button></div>
                </div>
                 )
             })}
             </React.Fragment>
         )
     }
  render() {
    return (
   <React.Fragment>
       {this.showCart()}
       {this.showProduct()}
   </React.Fragment>
    )
  }
}

export default Evnt4