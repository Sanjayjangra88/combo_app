import React, { Component } from 'react'

export class dropdown5 extends Component {
    state={
        persons:{experience:""},
        experiences:[
            "Fresher", 
            "0-1 years",
            "1-3 years",
            "3-5 years",
            "5+ years"
        ]
    }
    handelChange=(e)=>{
        const{currentTarget:input}=e;
        let s1={...this.state};
        s1.experience[input.name] = input.value;
        this.setState(s1);


    }
  render() {
      const{experience}=this.state.persons;
      const{experiences}=this.state;

    return (
      <div className='container'>
          <div className="form-group">
          <label>Experience</label>
          <select className="form-control"name="experience"id="experience"value={experience}onChange={this.handelChange}>
        <option disabled value="">Select the Experience</option>
        {experiences.map((ele)=><option>{ele}</option>)}
          </select>
          </div>
      </div>
    )
  }
}

export default dropdown5