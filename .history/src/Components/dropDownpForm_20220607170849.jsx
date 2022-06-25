import React, { Component } from 'react'

export class dropDownpForm extends Component {
    state={
        product:this.props.product,
    }
  render() {
      const{name}=this.state.product;
      console.log(name)
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