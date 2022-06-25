import React, { Component } from 'react'

export class dropDown8Form extends Component {
    state={
        works:this.props.works,
        work:["working","Studying"],
    }
    handelChange=(e)=>{
        let s1={...this.state};
        const {currentTarget:input}=e;
        s1.works[input.name]=input.value
        // if(input.name==="working")
        // console.log("hy")
        // else{
        //     console.log("by")
        // }
    }
  render() {
      const{str}=this.state.works;
      const{work}=this.state;

    return (
        <div className='container border'>
        <label className='form-check-label font-weight-bold'>Provide Details Below</label>
       
                <div className="form-check form-check-inline">
                    <input 
                    className="form-check-input"
                    type="radio"
                    name="str"
                    value="Workng"
                    checked={str==="Working"}
                    onChange={this.handelChange}/>
                    <label className="form-check-label">Working</label>
                </div>
        
         
                <div className="form-check form-check-inline">
                    <input 
                    className="form-check-input"
                    type="radio"
                    name="str"
                    value="Studying"
                    checked={str==="Studying"}
                    onChange={this.handelChange}/>
                    <label className="form-check-label">Studying</label>
                </div>
         
 </div>
    )
  }
}

export default dropDown8Form