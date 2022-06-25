import React, { Component } from 'react'

export class validation2Form extends Component {
    state={
        person:this.props.person,
        errors:{},
        countrys:[
            "United state of amarica",
            "Canada",
            "India",
            "United Kingdom",
        ],
        countryList:[
            {country:"United state of amarica",cities:["New York","Losangles","Seattle","San Fransisco"]},
            {country:"Canada",cities:["Toronto","Montreal","Vancouver"]},
            {country:"India",cities:["Delhi","Bengluru","Pune","Mumbai"]},
            {country:"United Kingdom",cities:["London","Bristial","Manchester"]},
        ],
    }
    handelChange=()=>{
        const {currentTarget:input}=e;
        let s1={...this.state};
        
         s1.person[input.name]=input.value
        if(input.name==="country") s1.person.city="";
     
        this.handelValidate(e);
        this.setState(s1);
    }
  render() {
    const{name,age,country,city,}=this.state.person;
    const{countrys,countryList,errors}=this.state;
    
    const cities = country? countryList.find((ele)=>ele.country===country).cities:[]

    return (
                  <div className="container">
                <h5>Enter New Details</h5>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text"className="form-control"name="name"id="name"placeholder='Enter the name'value={name}onChange={this.handelChange}onBlur={this.handelValidate} />
                    {errors.name?(<span className='text-danger'>{errors.name}</span>):("")}
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input type="number"className="form-control"id="age"name='age' placeholder='Enter the name'value={age}onChange={this.handelChange}onBlur={this.handelValidate} />
                    {errors.age?(<span className='text-danger'>{errors.age}</span>):("")}                
                </div>
                <div className="form-group">
                    <label>Contry</label>
                    <select className="form-control"name="country"id="country"value={country}onChange={this.handelChange}onBlur={this.handelValidate}>
                        <option disabled value="">Select the Country</option>
                        {countrys.map((ele)=><option>{ele}</option>)}
                    </select>
                    {errors.country?(<span className='text-danger'>{errors.country}</span>):("")}
                </div>
                {country? <div className="form-group">
                    <label>City</label>
                    <select className="form-control"name="city"id="country"value={city}onChange={this.handelChange}>
                        <option disabled value="">Select the City</option>
                        {cities.map((ele)=><option>{ele}</option>)}
                    </select>
                </div> :""}
                </div>
    )
  }
}

export default validation2Form