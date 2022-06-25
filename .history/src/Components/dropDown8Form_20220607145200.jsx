import React, { Component } from 'react'

export class dropDown8Form extends Component {
    state={
        costumer:this.props.costumers,
        
    }
    handelChange=(e)=>{
        const {currentTarget:input}=e;
        let s1={...this.state};
        s1.costumer[input.name]=input.value;
        if(input.value==="Working"){
            console.log("hy")
        }
        else{
            console.log("by")
        }
        this.setState(s1);
    }
  render() {
    const{gender}=this.state.costumer;
    

    return (
        <div className='container border'>
        <label className='form-check-label font-weight-bold'>Provide Details Below</label><br/>
        <div className="form-check form-check-inline">
                    <input 
                    className="form-check-input"
                    type="checkbox"
                    name="gender"
                    value="Working"
                    checked={gender==="Working"}
                    onChange={this.handelChange}/>
                    <label className="form-check-label">Working</label>
                </div><br/>
                <div className="form-check form-check-inline">
                    <input 
                    className="form-check-input"
                    type="checkbox"
                    name="gender"
                    value="Studing"
                    checked={gender==="Studing"}
                    onChange={this.handelChange}/>
                    <label className="form-check-label">Studing</label>
                </div>
 </div>
    )
  }
}

export default dropDown8Form