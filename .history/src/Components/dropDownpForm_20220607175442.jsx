import React, { Component } from 'react'

export class dropDownpForm extends Component {
    state={
       
    }
  render() {
    const{optionArry,optionSell}=this.props;
    
    return (
        <div className='container'>
        <h6>Chosse Options</h6>
       {this.showCheckBoxes("Name",optionArry.name,"name",optionSell.name)}
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
handelChange=(e)=>{
    let s1={ ...this.props.optionSell };
    const{ currentTarget: input }=e;
      input.name==="name" 
      ? (s1.name = this.upDateCBs(input.checked,input.value,s1.name)) 
      :
    (s1[input.name] = input.value);
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
}

export default dropDownpForm