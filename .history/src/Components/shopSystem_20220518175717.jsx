import React, { Component } from 'react'
import Shop from './shop';

export class shopSystem extends Component {
    state={
        mobiles:[
            {name:"Redmi 6",desc:["Upto 84GB","Dual Rear Cem|3000mAh"],price:7499},
            {name:"Realme 3",desc:["Upto 64GB","Dual Rear Cem|4230mAh"],price:8999},
            {name:"Honor 6s",desc:["2GB|16GB","Face Unlock|3020mAh"],price:5499},
            {name:"Samsung J6",desc:["4GB|64GB","14.22cm HD|Face unlock"],price:9490},
            {name:"Moto One",desc:["4GB|64GB","Extra 2000 off on Exchange"],price:13999},
            {name:"Nokia 6.1",desc:["3GB|32GB","Full HD Display|SD 630"],price:6999},
            
        ]
    }
  render() {
      const{mobiles}=this.state;
    return (
      <div className='container'>
          <div className="row">
              {mobiles.map((ele)=>(
                  <Shop mobile={ele}/>
              ))}
              
          </div>
          <h4>Cart</h4>
      </div>
    )
  }
}

export default shopSystem