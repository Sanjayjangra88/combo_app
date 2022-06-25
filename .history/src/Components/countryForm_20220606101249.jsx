import React, { Component } from 'react'

export class countryForm extends Component {
    state={
        data:this.props.data,
        countrys:[
            "India",
            "USA",
            "France",
            "Japan",
            "China",
        ],
    }
    handelChange=(e)=>{
        const {currentTarget:input}=e;
        let s1={...this.state};
        s1.data[input.name]=input.value
        
        this.setState(s1);

    }
  render() {
      const{data,countrys}=this.state;
      const{country}=this.state.data;
    return (
        <React.Fragment>
            <div className="container">
        <div className="form-group">
                <label>Contry</label>
                <select className="form-control"name="country"id="country"value={country}
                onChange={this.handelChange}>
                    <option disabled value="">Select the Country</option>
                    {countrys.map((ele)=><option>{ele}</option>)}
                </select>
                <button className='btn btn-primary mr-2'onClick={this.handelSubmit}>Submit</button>
            </div>
            </div>
            </React.Fragment>
  
    )
  }
}

export default countryForm
