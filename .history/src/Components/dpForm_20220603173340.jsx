import React, { Component } from 'react'

export class dpForm extends Component {
    state={
        costumers:this.props.costumers,
        delOption:["Home","Office","Pickup"],
    }
    handelChange=(e)=>{
        const {currentTarget:input}=e;
        let s1={...this.state};
        s1.costumers[input.name]=input.value;
        this.setState(s1);
    }
  render() {
      const{name,gender,del}=this.state.costumers;
      const{delOption}=this.state;
    return (
      <div className='container'>
           <div className="form-group">
                    <label>Name</label>
                    <input type="text"className="form-control"name="name"id="name"value={name} placeholder='Enter the name'onChange={this.handelChange} />
                </div>
                <div className="form-check form-check-inline">
                    <input 
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={gender==="Male"}
                    onChange={this.handelChange}/>
                    <label className="form-check-label">Male</label>
                </div>
                <div className="form-check form-check-inline">
                    <input 
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={gender==="Female"}
                    onChange={this.handelChange}/>
                    <label className="form-check-label">Female</label>
                </div>
                {this.showCheckBoxes("Choose Your Delivery Option",delOption,"delivery",del)}
      </div>
    )
  }
  showCheckBoxes=(label,arr,name,del)=>{
    return(
        <React.Fragment>
            <label className='form-check-label font-weight-bold'>{label}</label>
            {arr.map((ele)=>(
                <div className="form-check">
                    <input 
                     className='form-check-input'
                     value={ele}
                     type="radio"
                     name={name}
                     checked={del===ele}
                     onChange={this.handelChange}
                    />
                    <label className='form-check-label'>{ele}</label>
                </div>
            ))}
        </React.Fragment>
    )
}
}

export default dpForm