import React, {Component} from 'react'
export class dropDown extends Component{
    state={
        persons:{name:"",age:""},
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
        const{name,age}=this.state.persons;
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
                    <select className="form-control"name="country"id="country">
                        <option disabled value="">Select the Country</option>
                    </select>
                </div>
                <button className='btn btn-primary'onClick={this.handelSubmit}>Submit</button>
            </div>
        )


    }
}
export default dropDown
