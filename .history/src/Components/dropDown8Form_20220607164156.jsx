import React, { Component } from 'react'

export class dropDown8Form extends Component {
    state={
        costumer:this.props.costumers,
        costumer1:this.props.costumers1,
        view:0
        
    }
    handelChange=(e)=>{
        const {currentTarget:input}=e;
        let s1={...this.state};
       
        if(input.value==="Working"){
            s1.view=1
            this.setState(s1);
            
        }
        else if(input.value==="Studing"){
            s1.view=2
            this.setState(s1);
        };
        s1.costumer1[input.name]=input.value;
        this.setState(s1);
    }
    handelChange1=(e)=>{
        const {currentTarget:input}=e;
        let s1={...this.state};
        s1.costumer[input.name]=input.value;
        this.setState(s1);
    }
  render() {
    const{company,desgination,college,course}=this.state.costumer;
    const{gender}=this.state.costumer1;
    const{view}=this.state
    

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
                {view===1?
                ( 
                <div className="form-group">
                <label> Company Name</label>
                <input type="text"className="form-control"name="company"id="company"value={company} placeholder='Enter the Company Name'onChange={this.handelChange1} />
                <label> Designation Name</label>
                <input type="text"className="form-control"name="desgination"id="desgination"value={desgination} placeholder='Enter the Designation Name'onChange={this.handelChange1} />
            </div>
            
            
            ):view===2?(
                <div className="form-group">
                <label> College Name</label>
                <input type="text"className="form-control"name="college"id="college"value={college} placeholder='Enter the College Name'onChange={this.handelChange1} />
                <label>Course</label>
                <input type="text"className="form-control"name="course"id="course"value={course} placeholder='Enter the Course'onChange={this.handelChange1} />
            </div>
            ):""
            }
 </div>
    )
  }
}

export default dropDown8Form