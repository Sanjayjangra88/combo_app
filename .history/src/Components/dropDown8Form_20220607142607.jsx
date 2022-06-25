import React, { Component } from 'react'

export class dropDown8Form extends Component {
    state={
        person:this.props.person,
        works:this.props.works,
        work:["working","Studying"],
    }
    handelChange=(e)=>{
        let s1={...this.state};
        const {currentTarget:input}=e;
        s1.person[input.name]=input.value
        // if(input.name==="working")
        // console.log("hy")
        // else{
        //     console.log("by")
        // }
    }
  render() {
      const{gender}=this.state.works;
      const{work}=this.state;

    return (
        <div className='container border'>
        <label className='form-check-label font-weight-bold'>Provide Details Below</label>
       
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
         
 </div>
    )
  }
}

export default dropDown8Form