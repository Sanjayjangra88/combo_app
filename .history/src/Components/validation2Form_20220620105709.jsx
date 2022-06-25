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
    handelChange=(e)=>{
        const {currentTarget:input}=e;
        let s1={...this.state};
        
         s1.person[input.name]=input.value
        if(input.name==="country") s1.person.city="";
     
        // this.handelValidate(e);
        this.setState(s1);
    }
    handelSubmit=(e)=>{
        e.preventDefault();
        let errors = this.validateAll();
        if(this.isValid(errors)) this.props.onSubmit(this.state.person)
        else{
            let s1={...this.state};
            s1.errors = errors;
            this.setState(s1);
        }
    }
    handelValidate=(e)=>{
        let {currentTarget:input}=e;
        let s1={...this.state};
        switch (input.name){
            case "name":s1.errors.name = this.validName(input.value);
            break;
            case "age":s1.errors.age = this.validAge(input.value);
            break;
            case "country":s1.errors.country = this.validCountry(input.value);
            break;
            case "email":s1.errors.email = this.validEmail(input.value);
            break;
            default:
            break;


        }
        this.setState(s1);
    }
    isValidForm=()=>{
        let errors = this.validateAll();
        return this.isValid(errors);
    }
    isValid=(errors)=>{
        let keys = Object.keys(errors);
        let count= keys.reduce((acc,curr) => (errors[curr] ? acc+1 :acc),0);
        return count === 0;
 

    }
    validateAll=()=>{
        let {name,age,country,email}=this.state.person;
      let errors={};
      errors.name = this.validName(name);
      errors.age = this.validAge(age);
      errors.country= this.validCountry(country);
      errors.email= this.validEmail(email);
      return errors;
    }
    validName=(name)=>
    !name
    ? "Name must be enterd"
    :name.length<5
    ? "Name should have minimum 5 character"
    : ""
    validAge=(age)=>
    !age
    ? "Age must be enterd"
    :age < 21 || age > 75
    ? "age should be between 21 to 75"
    : ""

    validCountry=(country)=> (!country ? "Country should be enterd":"")
    validEmail=(email)=>
    !email
    ? "email must be enterd"
    : email.lastIndex==="a"
    ? "@ must be use"
    : ""
  render() {
    const{name,age,country,city,email}=this.state.person;
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
                <div className="form-group">
                    <label>Email</label>
                    <input type="text"className="form-control"name="email"id="email"placeholder='Enter the email'value={email}onChange={this.handelChange}onBlur={this.handelValidate} />
                    {errors.email?(<span className='text-danger'>{errors.email}</span>):("")}
                </div>
                <button className='btn btn-primary'onClick={this.handelSubmit}>Submit</button>

                </div>
    )
  }
}

export default validation2Form