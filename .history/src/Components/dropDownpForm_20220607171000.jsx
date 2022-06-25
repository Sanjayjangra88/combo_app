import React, { Component } from 'react'

export class dropDownpForm extends Component {
    state={
        product:this.props.product,
    }
  render() {
      const{product}=this.state;
      console.log(product)
    return (
        <div className='container'>
        <h6>Chosse Options</h6>
         {/* {this.showCheckBoxes("Brands",optionArry.brand,"brand",optionSell.brand)} */}
    </div>
    )
    // showCheckBoxes=(label,)=>{

    // }
  }
}

export default dropDownpForm