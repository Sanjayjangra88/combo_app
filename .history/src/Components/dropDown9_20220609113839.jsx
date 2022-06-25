import React, { Component } from 'react'
import DropDownpForm from './dropDownpForm';

export class dropDown9 extends Component {
    state={
        product:[
            { id: "PEP110", name: "Pepsi", category: "Food", stock: "true" },
            { id: "CLO876", name: "Close Up", category: "Toothpaste", stock: "false" },
            { id: "PEA531", name: "Pears", category: "Soap", stock: "true" },
            { id: "LU7264", name: "Lux", category: "Soap", stock: "false" },
            { id: "COL112", name: "Colgate", category: "Toothpaste", stock: "true" },
            { id: "DM881", name:  "Dairy Milk", category: "Food", stock: "false" },
            { id: "LI130", name:  "Liril", category: "Soap", stock: "true" },
            { id: "PPS613", name: "Pepsodent", category: "Toothpaste", stock: "false" },
            { id: "MAG441", name: "Maggi", category: "Food", stock: "true"},
        ],
        optionSell:{
            name:[],
            category:[],
            stock:"",
            },
            optionArry:{
                name:["Pepsi","Close Up","Pears","Lux","Colgate","Dairy Milk","Liril","Pepsodent","Maggi"],
            
            },
    };
    handelChangeOptions=(optionSell)=>{
        let s1={...this.state};
        s1.optionSell= optionSell 
        this.setState(s1)
    }
    showProducts=()=>{
        let s1={...this.state};
        const{product,optionSell}=this.state;
        const{name}=optionSell;
        console.log(name)
        
        const product1=name.length > 0 ? product.filter((ele) => name.findIndex((lt)=>lt===ele.name)>=0 )
         : product; 
        return(
            
            <div className="container">
            <React.Fragment>
            <h4>Selected Product:{name}</h4>
            {product1.map((ele)=>(
               
                <div className="row bg-light">
                    <div className="col-2">{ele.name}</div>
                    <div className="col-2">{ele.category}</div>
                    <div className="col-2">{ele.id}</div>
                    <div className="col-2">{ele.stock}</div>
                  
                </div>
                
            ))}
            </React.Fragment>
        </div>
        )
    }
  render() {
      const{optionSell,optionArry}=this.state;
    return (
        <div className='container'>
          <div className="row">
              <div className="col-3 border bg-light">
      <DropDownpForm optionArry={optionArry}optionSell={optionSell}onChangeOptions={this.handelChangeOptions}/>
      </div>
              <div className="col-9 border">{this.showProducts()}</div>
          </div>
      </div>
    )
  }
}

export default dropDown9