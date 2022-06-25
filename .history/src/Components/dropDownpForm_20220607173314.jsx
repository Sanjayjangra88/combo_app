import React, { Component } from 'react'

export class dropDownpForm extends Component {
    state={
       
    }
  render() {
      const{product}=this.state;
      const{optionSell}=this.props;
     console.log(optionSell.name)
    return (
        <div className='container'>
        <h6>Chosse Options</h6>
         {this.showCheckBoxes("name",product,"name",optionSell.name)}
    </div>
    )
  
  }
  showCheckBoxes=(label,name,selVal)=>{
      const{product}=this.props;
      console.log(product);
    <React.Fragment>
    <label className='form-check-label font-weight-bold'>{label}</label>
    {product.map((ele,index)=>(
        <div className="form-check">
            <input 
             className='form-check-input'
             value={ele.name}
             type="checkbox"
             name={name}
             checked={selVal.findIndex((st)=>st===ele)>=0}
             onChange={this.handelChange}
            />
            <label className='form-check-label'>{ele.name}</label>
        </div>
    ))}
</React.Fragment>

  }
}

export default dropDownpForm