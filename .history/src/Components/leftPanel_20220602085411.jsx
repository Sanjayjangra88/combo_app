import React, { Component } from 'react'

export class leftPanel extends Component {
  render() {
      const{optionArry,optionSell}=this.props;
    //   console.log(optionSell)
    return (
      <div className='container'>
          <h4>Chosse Options</h4>
          <button className='btn btn-warning btn-sm'onClick={this.props.onClear}>Clear All</button>
          {this.showCheckBoxes("Brands",optionArry.brand,"brand",optionSell.brand)}
          {this.showCheckBoxes("Ram",optionArry.ram,"ram",optionSell.ram)}
          {this.showRadios("Processor",optionArry.processor,"processor",optionSell.processor)}
          {this.showRadios("Rating",optionArry.rating,"rating",optionSell.rating)}
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
                       checked={selArr.findIndex((st)=>st===ele)>0}
                       onChange={this.handelChange}
                      />
                      <label className='form-check-label font-weight-bold'>{ele}</label>
                  </div>
              ))}
          </React.Fragment>
      )
  }
  showRadios=(label,arr,name,selVal)=>{
      return(
          <React.Fragment>
                 <label className="form-check-label font-weight-bold">{label}</label><br/>
                {arr.map((ele)=>(
                     <div className="form-check ">
                     <input 
                     className="form-check-input"
                     type="radio"
                     name={name}
                     value={ele}
                     checked={selVal===ele}
                     onChange={this.handelChange}/>
                     <label className="form-check-label">{ele}</label>
                 </div>
                ))}
          </React.Fragment>
      )
  }
}

export default leftPanel