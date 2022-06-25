import React, { Component } from 'react'

export class leftPanel extends Component {
   
  render() {
      const{optionArry,optionSell,remove,brand}=this.props;
     
    //   console.log(optionSell)
    return (
      <div className='container'>
          <h6>Chosse Options</h6>
          <button className="btn btn-warning btn-sm" onClick={remove}>Clear All</button><br/>
          
     
          {/* <React.Fragment> */}
              <div className="container">
                      <div className="form-group">
          <label>Brands</label>
          
          <select className="form-control"name="brand"id="brand"value={brand}onChange={this.handelChange}>
        <option disabled value="">Select the brand</option>
        {optionArry.brand.map((ele)=><option>{ele}</option>)}
          </select>
          </div>
              </div>
          {/* </React.Fragment> */}
      


          
          {/* {this.showCheckBoxes("Brands",optionArry.brand,"brand",optionSell.brand)} */}
          {this.showCheckBoxes("Ram",optionArry.ram,"ram",optionSell.ram)}
          {this.showRadios("Processor",optionArry.processor,"processor",optionSell.processor)}
          {this.showRadios("Rating",optionArry.rating,"rating",optionSell.rating)}
          {this.showRadios("HardDisk",optionArry.hardDisk,"hardDisk",optionSell.hardDisk)}
      </div>
    )
  }
  handelChange=(e)=>{
      let s1={ ...this.props.optionSell };
      let s2={ ...this.props.brand };
      const{ currentTarget: input }=e;
      input.name==="brand" 
      ? (s1.brand = this.upDateCBs(input.checked,input.value,s1.brand)) 
      : input.name === "ram" 
      ? (s1.ram = this.upDateCBs(input.checked,input.value,s1.ram)) 
      : (s1[input.name] = input.value);
     s2.brand[input.name] = input.value;
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
                       checked={selArr.findIndex((st)=>st===ele)>=0}
                       onChange={this.handelChange}
                      />
                      <label className='form-check-label'>{ele}</label>
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