import React, { Component } from 'react'

export class dropDownpForm extends Component {
    state={
       
    }
  render() {
      const{product}=this.state;
      const{optionSell,optionArry}=this.props;
     console.log(optionSell.name)
    return (
        <div className='container'>
        <h6>Chosse Options</h6>
       {this.showCheckBoxes("Name",optionArry.namme,"name",optionSell.name)}
       </div>
    )
  
  }
  showCheckBoxes=(label,arr,name,selArr)=>{
    return(
        <React.Fragment>
            <label className='form-check-label font-weight-bold'>{label}</label>
            {arr.map((ele,index)=>(
                <div className="form-check">
                    <input 
                     className='form-check-input'
                     value={ele}
                     type="checkbox"
                     name={name}
                     checked={selArr.findIndex((st)=>st===ele)>=0}
                     onChange={this.handelChange}
                    />
                    <label className='form-check-label'>{ele}</label>
                </div>
            ))}
        </React.Fragment>
    )
}
}

export default dropDownpForm