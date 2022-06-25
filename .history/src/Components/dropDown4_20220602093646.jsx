import React, { Component } from 'react'
import LeftPanel from './leftPanel'

export class dropDown4 extends Component {
    state={
        laptops:[
            {model:"AX4581",brand:"Acer",ram:"4GB",hardDisk:"500GB",rating:"3",processor:"i3"},
            {model:"HB2881",brand:"HP",ram:"4GB",hardDisk:"250GB",rating:"4",processor:"i3"},
            {model:"DM811",brand:"Dell",ram:"4GB",hardDisk:"1TB",rating:"3",processor:"i3"},
            {model:"AP629",brand:"Acer",ram:"6GB",hardDisk:"1TB",rating:"2",processor:"i3"},
            {model:"AT820",brand:"Acer",ram:"8GB",hardDisk:"1TB",rating:"4",processor:"i5"},
            {model:"HK008",brand:"HP",ram:"6GB",hardDisk:"250GB",rating:"3",processor:"i5"},
            {model:"MAir11",brand:"Apple",ram:"4GB",hardDisk:"128GB",rating:"4",processor:"i5"},
            {model:"MPro24X",brand:"Apple",ram:"8GB",hardDisk:"256GB",rating:"4",processor:"i7"},
            {model:"DL390",brand:"Dell",ram:"6GB",hardDisk:"500GB",rating:"3",processor:"i3"},
            {model:"AM954",brand:"Acer",ram:"8GB",hardDisk:"1TB",rating:"3",processor:"i7"},
            {model:"AB234",brand:"Acer",ram:"4GB",hardDisk:"250GB",rating:"2",processor:"i3"},
            {model:"HC874",brand:"HP",ram:"8GB",hardDisk:"1TB",rating:"1",processor:"i7"},
            ],
            optionArry:{
                brand:["Acer","HP","Dell","Apple"],
                ram:["4GB","6GB","8GB"],
                rating:["1","2","3","4"],
                processor:["i3","i5","i7"],
            },
                optionSell:{
                    brand:[],
                    ram:[],
                    rating:"",
                    processor:"",

                }
            
    }
    showLaptops=()=>{
        let s1={...this.state};
        const{laptops,optionSell}=this.state;
        return(
            <div className="container">
                <h4>Selected Laptops</h4>
                {laptops.map((ele)=>(
                    <div className="row">
                        <div className="col-2 border">{ele.model}</div>
                        <div className="col-2 border">{ele.brand}</div>
                        <div className="col-2 border">{ele.ram}</div>
                        <div className="col-2 border">{ele.hardDisk}</div>
                        <div className="col-2 border">{ele.rating}</div>
                        <div className="col-2 border">{ele.processor}</div>
                    </div>
                ))}
            </div>
        )
        
       this.setState(s1)
       

    }
    onClear=()=>{
     let s1={...this.state};
     s1.optionSell= { 
        brand:[],
        ram:[],
        rating:"",
        processor:"",
    }
    this.setState(s1)
    }
    handelChangeOptions=(optionSell)=>{
        let s1={...this.state};
        s1.optionSell= optionSell 
        this.setState(s1)
     }
  render() {
      const{optionArry,optionSell}=this.state;
    return (
      <div className='container'>
          <div className="row">
              <div className="col-3 border bg-light">
                  <LeftPanel optionArry={optionArry}optionSell={optionSell}onChangeOptions={this.handelChangeOptions}onClear={this.clear}/>
              </div>
              <div className="col-9 border">{this.showLaptops()}</div>
          </div>
      </div>
    )
  }
}

export default dropDown4