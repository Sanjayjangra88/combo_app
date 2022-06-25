import React, { Component } from 'react'

export class simpleForm extends Component {
    state={
        person:this.props.person,
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
        designations:[
            "Devloper",
            "Senior Devloper",
            "Team Leader",
            "ArchiTech",
            "Delivery Manager"
        ],
        tech:[
            "React","JavaScricpt","JQuery","AngularJS"
        ]
    }
    handelChange=(e)=>{
        const {currentTarget:input}=e;
        let s1={...this.state};
        input.type==="checkbox"
        ? input.name==="techKnown"
        ?( s1.person.techKnown = this.updateCBs(
            input.checked,input.value,s1.person.techKnown
            ))
        
         :(s1.person[input.name]=input.checked)
         :(s1.person[input.name]=input.value);
        if(input.name==="country") s1.person.city="";
        if(!s1.person.passport) s1.person.passportNumber = "";
        this.setState(s1);

    }
    updateCBs=(checked,value,arr)=>{
        (checked)?arr.push(value)
        
        
           : let index = arr.findIndex((ele) =>ele === value);
            if(index >= 0) arr.splice(index,1);
        
        return arr;

    }
    handelSubmit=(e)=>{
      e.preventDefault();
      this.props.onSubmit(this.state.person)
    }
  render() {
    const{name,age,country,gender,passport,licence,city,passportNumber,designation,techKnown=[]}=this.state.person;
    const{countrys,countryList,designations,tech}=this.state;
    const cities = country? countryList.find((ele)=>ele.country===country).cities:[]

    return (
                  <div className="container">
                <h5>Enter New Details</h5>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text"className="form-control"name="name"id="name"placeholder='Enter the name'value={name}onChange={this.handelChange} />
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input type="number"className="form-control"id="age"name='age' placeholder='Enter the name'value={age}onChange={this.handelChange} />
                </div>
                <div className="form-group">
                    <label>Contry</label>
                    <select className="form-control"name="country"id="country"value={country}onChange={this.handelChange}>
                        <option disabled value="">Select the Country</option>
                        {countrys.map((ele)=><option>{ele}</option>)}
                    </select>
                </div>
                {country? <div className="form-group">
                    <label>City</label>
                    <select className="form-control"name="city"id="country"value={city}onChange={this.handelChange}>
                        <option disabled value="">Select the City</option>
                        {cities.map((ele)=><option>{ele}</option>)}
                    </select>
                </div> :""}
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
                <div className="form-check">
                    <input className="form-check-input"type="checkbox"value={passport} name="passport"checked={passport}onChange={this.handelChange}/>
                    <label className="form-check-label">Passport</label>
                </div>
                {passport? <div className="form-group">
                    <label>Passport Number</label>
                    <input type="text"className="form-control"name="passportNumber"id="passportNumber"placeholder='Enter the passport Number'value={passportNumber}onChange={this.handelChange} />
                </div>:""}
                <div className="form-check">
                    <input className="form-check-input"type="checkbox"value={licence} name="licence"checked={licence}onChange={this.handelChange}/>
                    <label className="form-check-label">Licence</label>
                </div>
                <label className="form-check-label font-weight-bold">Choose Designation</label><br/>
                {designations.map((ele)=>(
                     <div className="form-check form-check-inline">
                     <input 
                     className="form-check-input"
                     type="radio"
                     name="designation"
                     value={ele}
                     checked={designation===ele}
                     onChange={this.handelChange}/>
                     <label className="form-check-label">{ele}</label>
                 </div>
                ))}
               <br/>
                <label className="form-check-label font-weight-bold">Tech</label>
                {tech.map((ele)=>(<div className="form-check">
                    <input className="form-check-input"type="checkbox"value={ele} name="techKnown"
                    checked={techKnown.findIndex((e)=>e===ele)>=0}onChange={this.handelChange}/>
                    <label className="form-check-label">{ele}</label>
                </div>))}
                <br/>
                <button className='btn btn-primary'onClick={this.handelSubmit}>Submit</button>
            </div>
    )
  }
}

export default simpleForm