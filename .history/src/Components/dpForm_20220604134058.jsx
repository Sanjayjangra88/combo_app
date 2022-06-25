import React, { Component } from 'react'

export class dpForm extends Component {
    state={
        costumer:this.props.costumers,
        slots:["2pm to 6pm","Before 10am","8am to 10am","after 10am"]
        
    }
    handelChange=(e)=>{
        const {currentTarget:input}=e;
        input.type==="checkbox"
        ? input.name==="payment"
        ?( s1.costumer.payment = this.updateCBs(
            input.checked,input.value,s1.costumer.payment=[]
            ))
        
         :(s1.costumer[input.name]=input.checked)
         :(s1.costumer[input.name]=input.value);
       
        this.setState(s1);
    }
    updateCBs=(checked,value,arr)=>{
        if(checked) 
            arr.push(value);
        
        else{
            let index = arr.findIndex((ele) =>ele === value);
            if(index >= 0) arr.splice(index,1);
        }
        return arr;

    }
    handelSubmit=(e)=>{
        console.log("hy")
        e.preventDefault();
      this.props.onSubmit(this.state.costumer)

    }
  render() {
      const{name,gender,del,payment,slot}=this.state.costumer;
      const{slots}=this.state
      
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
                </div><br/>
                <label className="form-check-label font-weight-bold">Choose youe delivery option</label><br/>
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
                <div className="form-check form-check-inline">
                    <input 
                    className="form-check-input"
                    type="radio"
                    name="del"
                    value="pickup"
                    checked={del==="pickup"}
                    onChange={this.handelChange}/>
                    <label className="form-check-label">Pickup</label>
                </div><br/>
                <label className="form-check-label font-weight-bold">Choose youe Payment option</label><br/>
                <div className="form-check form-check-inline">
                    <input 
                    className="form-check-input"
                    type="checkbox"
                    name="payment"
                    value="creditCard"
                    checked={payment==="creditCard"}
                    onChange={this.handelChange}/>
                    <label className="form-check-label">Credit Card</label>
                </div>
                <div className="form-check form-check-inline">
                    <input 
                    className="form-check-input"
                    type="checkbox"
                    name="payment"
                    value="debitCard"
                    checked={payment==="debitCard"}
                    onChange={this.handelChange}/>
                    <label className="form-check-label">Debit Card</label>
                </div>
                <div className="form-check form-check-inline">
                    <input 
                    className="form-check-input"
                    type="checkbox"
                    name="payment"
                    value="netbanking"
                    checked={payment==="netbanking"}
                    onChange={this.handelChange}/>
                    <label className="form-check-label">Net Banking</label>
                </div>
                <div className="form-group">
                   
                    <select className="form-control"name="slot"id="slot"value={slot}onChange={this.handelChange}>
                        <option disabled value="">Select the delivery slot</option>
                        {slots.map((ele)=><option>{ele}</option>)}
                    </select>
                </div>
                <button className='btn btn-primary'onClick={this.handelSubmit}>Submit</button>
               
      </div>
    )
  }
 
}

export default dpForm