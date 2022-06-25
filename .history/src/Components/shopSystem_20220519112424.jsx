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
    handelCart=(id)=>{
        console.log(id)
        let s1={...this.state};
        let index = s1.mobiles.find((ele)=>ele.id===id)
        console.log(index.name);
        index["qty"] = 0;
        s1.cart.splice(1,0,index);
        let index1 = s1.cart.find((ele)=>ele.id===id)
         index1.qty++;
        console.log(index1.qty);
    

       
       

        
        

      
    //    let index= s1.mobiles.findIndex((ele)=>ele.id==id)
       
       this.setState(s1)
      

       
     console.log(s1.cart)
    //    console.log(s1.qty)


}
  render() {
      const{mobiles,cart,qty}=this.state;
      

    return (
      <div className='container'>
          <div className="row">
              {mobiles.map((ele)=>(
                  <Shop mobile={ele}onCart={this.handelCart}/>
              ))}
              
          </div>
          <h4>Cart</h4><br/>
          {cart.map((ele)=><ul><li>{ele.name},Qunatity {qty}</li></ul>)}
      </div>
    )
  }
}

export default shopSystem