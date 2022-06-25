import React, { Component } from 'react'

export class leftPanel extends Component {
  render() {
      const{optionArry,optionSell}=this.props;
    //   console.log(optionSell)
    return (
      <div className='container'>
          <h6>Chosse Options</h6>
          <button className='btn btn-warning btn-sm'onClick={this.props.onClear}>Clear All</button><br/>
          {this.showCheckBoxes("Brands",optionArry.brand,"brand",optionSell.brand)}
          {this.showCheckBoxes("Ram",optionArry.ram,"ram",optionSell.ram)}
          {this.showRadios("Processor",optionArry.processor,"processor",optionSell.processor)}
          {this.showRadios("Rating",optionArry.rating,"rating",optionSell.rating)}
      </div>
    )
  }
  handelChange=(e)=>{
      let s1={...this.props.optionSell};
      const{ currentTarget: input }=e;
      input.name==="brnad" ? (s1.brand = this.upDateCBs(input.checked,input.value,s1.brand)) : input.name === "ram" ? (s1.ram = this.upDateCBs(input.checked,input.value,s1.ram)) :(s1[input.name] = input.value);
      this.props.onChangeOptions(s1);
  }
  upDateCBs=(checked,value,arr)=>{
      if(checked) arr.push(value)
      else{
          let index = arr.findIndex((ele)=>ele===value);
          if(index>=0) arr.splice(index,1);
      }
      return arr;

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
                      <label className='form-check-label '>{ele}</label>
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