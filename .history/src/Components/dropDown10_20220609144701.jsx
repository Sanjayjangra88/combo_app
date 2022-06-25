import React, { Component } from 'react'
import DropDown10Form from './dropDown10Form';

export class dropDown10 extends Component {
    state={
        product:[
            { id: "PEP110", name: "Pepsi", category: "Food", stock: "yes" },
            { id: "CLO876", name: "CloseUp", category: "Toothpaste", stock: "no" },
            { id: "PEA531", name: "Pears", category: "Soap", stock: "arriving" },
            { id: "LU7264", name: "Lux", category: "Soap", stock: "yes" },
            { id: "COL112", name: "Colgate", category: "Toothpaste", stock: "no" },
            { id: "DM881", name: "Dairy Milk", category: "Food", stock: "arriving" },
            { id: "LI130", name: "Liril", category: "Soap", stock: "yes" },
            { id: "PPS613", name: "Pepsodent", category: "Toothpaste", stock: "no" },
            { id: "MAG441", name: "Maggi", category: "Food", stock: "arriving" },
            { id: "PNT560", name: "Pantene", category: "Shampoo", stock: "no" },
            { id: "KK219", name: "KitKat", category: "Food", stock: "arriving" },
            { id: "DOV044", name: "Dove", category: "Soap", stock: "yes" }
        ],
        optionSell:{
            name:[],
            category:[""],
            stock:"",
            },
            optionArry:{
                name:["Pepsi","Close Up","Pears","Lux","Colgate","Dairy Milk","Liril","Pepsodent","Maggi"],
                category:["Food","Toothpaste","Soap","Shampoo"],
                stock:["arriving","yes","no"]
            
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
        const{category,name,stock}=optionSell;
        console.log(category)
        
        const product1=category.length > 0 ? product.filter((ele) => category.findIndex((lt)=>lt===ele.category)>=0 )
         :category; 
        const product2=stock.length > 0 ? product1.filter((ele) => ele.stock === stock)
        :category;
        // const product1=name.length > 0 ? product.filter((ele) => ele.name === name)
        // :name;
        
        return(
            <div className="container">
            <React.Fragment>
            
            <h6>Selected Product:{name}</h6>
            {product2.map((ele)=>(
               
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
      <DropDown10Form optionArry={optionArry}optionSell={optionSell}onChangeOptions={this.handelChangeOptions}/>
      </div>
              <div className="col-9 border">{this.showProducts()}</div>
          </div>
      </div>
    )
  }
}

export default dropDown10