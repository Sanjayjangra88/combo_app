import { Button } from 'bootstrap';
import React, { Component } from 'react'
import Shop from './shop';

export class shopSystem extends Component {
    state={
        mobiles:[
            {id:11,name:"Redmi 6",desc:["Upto 84GB","Dual Rear Cem|3000mAh"],price:7499},
            {id:12,name:"Realme 3",desc:["Upto 64GB","Dual Rear Cem|4230mAh"],price:8999},
            {id:13,name:"Honor 6s",desc:["2GB|16GB","Face Unlock|3020mAh"],price:5499},
            {id:14,name:"Samsung J6",desc:["4GB|64GB","14.22cm HD|Face unlock"],price:9490},
            {id:15,name:"Moto One",desc:["4GB|64GB","Extra 2000 off on Exchange"],price:13999},
            {id:16,name:"Nokia 6.1",desc:["3GB|32GB","Full HD Display|SD 630"],price:6999},
            
        ],
        cart:[],
             
    }    
    handelCart=(index)=>{
        let s1 = { ...this.state };
        let pr = s1.mobiles[index];
        console.log(pr)
        let x1 = s1.cart.find((c1) => c1.name === pr.name);
        x1 ? (x1.qty = x1.qty + 1) : s1.cart.push({ ...pr, qty: 1 });
        this.setState(s1);
    }
  render() {
      let arr=[]
      const{mobiles,cart}=this.state;
      
      
  
    return (
      <div className='container'>
          <div className="row">
              {mobiles.map((ele,index)=>(
                  <Shop mobile={ele}index={index} onCart={this.handelCart}/>
              ))}
              
          </div>
          <h4>Cart</h4><br/>
          <React.Fragment>
          {cart.length>0?cart.map((ele)=>

          <ul><li>{ele.name},Qunatity {ele.qty}
          <button className="btn btn-success btn-sm m-2">Remove Cart</button>
          </li></ul>):"Cart is Empty"}<br/>
          {cart}

          </React.Fragment>
          
      </div>
      
    )
  }
}

export default shopSystem