import React, { Component } from 'react'
import Products from './products';

export class productSystem extends Component {
    state={
        products:[
            {name:"Coca cola",code:"C232",price:20,quantity:10},
            {name:"5Star",code:"F168",price:15,quantity:0},
            {name:"Magie",code:"M228",price:28,quantity:22},
            {name:"Pepsi",code:"P288",price:20,quantity:18},
            {name:"DeriMilk",code:"D311",price:40,quantity:0},
            {name:"Mirinda",code:"M301",price:25,quantity:8},
            {name:"KitKat",code:"K477",price:18,quantity:11},
            {name:"RedBull",code:"R544",price:90,quantity:3},
        ]
    }
  render() {
      const{products}=this.state;
    return (
      <div className='row'>
          {products.map((ele)=>
          <Products products={ele}/>
          )}
        
      </div>
    )
  }
}

export default productSystem
