import React, { Component } from 'react'

export class dropdown5 extends Component {
    state={
        experience:[
            "Fresher", 
            "0-1 years",
            "1-3 years",
            "3-5 years",
            "5+ years"
        ]
    }
  render() {
      const{experience}=this.state;
    return (
      <div className='container'>
          <select className="form-control"name="country"id="experience"value={experience}onChange={this.handelChange}>
        <option disabled value="">Select the Experience</option>
        {experience.map((ele)=><option>{ele}</option>)}
          </select>
      </div>
    )
  }
}

export default dropdown5