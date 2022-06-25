import React, { Component } from 'react'

export class dpForm extends Component {
    state={
        costumers:this.props.costumers,
        
    }
    handelChange=(e)=>{
        const {currentTarget:input}=e;
        let s1={...this.state};
        s1.costumers[input.name]=input.value;
       
        this.setState(s1);
    }
  render() {
      const{name,gender,del}=this.state.costumers;
      const{optionArry,optionSell}=this.props;
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
                    <label className="form-check-label">Home</label>
                </div><br/>
                <label className="'form-check-label font-weight-bold'">Choose youe delivery option</label><br/>
                <div className="form-check form-check-inline">
                    <input 
                    className="form-check-input"
                    type="radio"
                    name="del"
                    value="Home"
                    checked={del==="Home"}
                    onChange={this.handelChange}/>
                    <label className="form-check-label">Home</label>
                </div>
                <div className="form-check form-check-inline">
                    <input 
                    className="form-check-input"
                    type="radio"
                    name="del"
                    value="Office"
                    checked={del==="Office"}
                    onChange={this.handelChange}/>
                    <label className="form-check-label">Office</label>
                </div>
               
      </div>
    )
  }
 
}

export default dpForm