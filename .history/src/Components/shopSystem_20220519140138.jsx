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
       let s1={...this.state};
       const{cart}=this.state;
       const index = s1.mobiles.find((ele)=>ele.id===id)
       cart.splice(1,0,index);
           
       //        this.setState(s1)
    //        cart["qty"]=0;
    //        cart.splice(1,0,index);
           
    //        this.setState(s1)
    //    console.log(cart.length)

    //    if(cart.length===0){
    //        const index = s1.mobiles.find((ele)=>ele.id===id)
           
    //        cart["qty"]=0;
    //        cart.splice(1,0,index);
           
    //        this.setState(s1)
    //        console.log(cart)
    //    }
    //    else{
    //     const index1 = s1.cart.find((ele)=>ele.id===id)
    //     let str = cart.filter((ele)=>ele.id !== index1.id)
    //     // console.log(str)
    //     cart.splice(0,0,str)
           
        //  let index1 =cart.find((ele)=>ele.id===id)
        //    if(index1.id===id){
        //     //    console.log("hy")
           
        //   }
        //   else{
        //     let index2 =cart.find((ele)=>ele.id===id)
        //     cart.splice(1,0,index2)
        //     this.setState(s1)
        //   }
        // console.log(index1.name)
        
           
          
        //    console.log(id);
           this.setState(s1)
       
       

        
        
        
         
            
            
        
        
      
    
      

       
  


}
  render() {
      const{mobiles,cart,qty}=this.state;
    //   let str = cart.filter((ele)=>)
      

    return (
      <div className='container'>
          <div className="row">
              {mobiles.map((ele)=>(
                  <Shop mobile={ele}onCart={this.handelCart}/>
              ))}
              
          </div>
          <h4>Cart</h4><br/>
          {cart.map((ele)=>JSON.stringify(<ul><li>{ele.name},Qunatity {qty}</li></ul>))}
      </div>
    )
  }
}

export default shopSystem