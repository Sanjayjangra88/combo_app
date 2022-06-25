import React, { Component } from 'react'

export class dropDown2 extends Component {
    state={
        persons:{name:"",age:"",country:"",gender:""},
        countrys:[
            "United state of amarica",
            "Canada",
            "India",
            "United Kingdom",
        ]
    }
    handelChange=(e)=>{
        const {currentTarget:input}=e;
        let s1={...this.state};
        s1.persons[input.name]=input.value;
        this.setState(s1);

    }
    handelSubmit=(e)=>{
      e.preventDefault();
    }
    render(){
        const{name,age,country,gender}=this.state.persons;
        const{countrys}=this.state;
        return(
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
                <br/>
                <button className='btn btn-primary'onClick={this.handelSubmit}>Submit</button>
            </div>
        )


    }
}

export default dropDown2