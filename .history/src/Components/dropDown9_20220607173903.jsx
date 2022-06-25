import React, { Component } from 'react'
import DropDownpForm from './dropDownpForm';

export class dropDown9 extends Component {
    state={
        product:[
            { id: "PEP110", name: "Pepsi", category: "Food", stock: true },
            { id: "CLO876", name: "Close Up", category: "Toothpaste", stock: false },
            { id: "PEA531", name: "Pears", category: "Soap", stock: true },
            { id: "LU7264", name: "Lux", category: "Soap", stock: false },
            { id: "COL112", name: "Colgate", category: "Toothpaste", stock: true },
            { id: "DM881", name:  "Dairy Milk", category: "Food", stock: false },
            { id: "LI130", name:  "Liril", category: "Soap", stock: true },
            { id: "PPS613", name: "Pepsodent", category: "Toothpaste", stock: false },
            { id: "MAG441", name: "Maggi", category: "Food", stock: true},
        ],
        optionSell:{
            name:[],
            category:[],
            stock:"",
            },
            optionArry:{
                brand:["Pepsi","Close Up","Pears","Lux","Colgate","Dairy Milk","Liril","Pepsodent","Maggi"],
                ram:["4GB","6GB","8GB"],
                rating:["1","2","3","4"],
                processor:["i3","i5","i7"],
                hardDisk: ["128GB","250GB","256GB","500GB","1TB"]
            },
    };
  render() {
      const{product,optionSell,optionArry}=this.state;
    return (
      <DropDownpForm product={product}optionSell={optionSell}optionArry={optionArry}/>
    )
  }
}

export default dropDown9