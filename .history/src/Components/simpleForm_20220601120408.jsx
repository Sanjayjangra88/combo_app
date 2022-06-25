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
        input.type==="checkbox"?
        input.name==="techKnown"?( s1.persons.techKnown=this.updateCBs(input.checked,input.value,s1.persons.techKnown)):
         s1.persons[input.name]=input.checked:
        s1.persons[input.name]=input.value;
        if(input.name==="country") s1.persons.city="";
        if(!s1.persons.passport) s1.persons.passportNumber = "";
        this.setState(s1);

    }
    updateCBs=(checked,value,arr)=>{
        if(checked) arr.push(value)
        else{
            let index = arr.findIndex((ele)=>ele===value)
            if(index>=0) arr.splice(index,1);
        }
        return arr;

    }
    handelSubmit=(e)=>{
      e.preventDefault();
      this.props.onSubmit(this.state.person)
    }
  render() {
    const{name,age,country,gender,passport,licence,city,passportNumber,designation,techKnown}=this.state.person;

    return (
      <div>simpleForm</div>
    )
  }
}

export default simpleForm