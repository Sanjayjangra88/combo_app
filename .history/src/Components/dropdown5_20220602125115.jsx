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
        ],
        manager:{name:""},
        managers:[
            "Meg Smith","Bill Watson","Tim Gates","George Cook","Larry Gomes"
        ]
    }
    handelChange=(e)=>{
        const{currentTarget:input}=e;
        let s1={...this.state};
        input.type==="radio"
        ? input.name==="name"
        ? (s1.manager.name = this.updateCBs(input.checked,input.value,s1.manager.name
            ))
            :(s1.manager[input.name]=input.checked)
            :(s1.manager[input.name]=input.value);
        s1.manager[input.name] = input.value;
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
  render() {
      const{experience}=this.state.persons;
      const{experiences}=this.state;
      const{name}=this.state.manager;
      const{managers}=this.state;

    return (
      <div className='container'>
          <div className="form-group">
          <label>Experience</label>
          <select className="form-control"name="experience"id="experience"value={experience}onChange={this.handelChange}>
        <option disabled value="">Select the Experience</option>
        {experiences.map((ele)=><option>{ele}</option>)}
          </select>
          </div>
          <label className="form-check-label font-weight-bold">Select Name</label>
          {managers.map((ele)=>(
              <div className="form-check">
                  <input
                  className='form-check-input'
                  type="radio"
                  name='name'
                  value={name}
                  checked="Select the names"
                  onChange={this.handelChange}/>
                  <label className="form-check-label">{ele}</label>
              </div>
          ))}
        
      </div>
    )
  }
}

export default dropdown5