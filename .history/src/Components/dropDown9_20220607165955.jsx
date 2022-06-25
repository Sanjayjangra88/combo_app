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
            { id: "DM881", name: "Dairy Milk", category: "Food", stock: false },
            { id: "LI130", name: "Liril", category: "Soap", stock: true },
            { id: "PPS613", name: "Pepsodent", category: "Toothpaste", stock: false },
            { id: "MAG441", name: "Maggi", category: "Food", stock: true},
        ],
    };
  render() {
      const{product}=this.state;
    return (
      <DropDownpForm product={product}/>
    )
  }
}

export default dropDown9