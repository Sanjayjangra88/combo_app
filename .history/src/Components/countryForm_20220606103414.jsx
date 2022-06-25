import React, { Component } from 'react'

export class countryForm extends Component {
    state={
        data:this.props.data,
        data2:this.props.dat2,
        countrys:[
            "India",
            "USA",
            "France",
            "Japan",
            "China",
        ],
        view:0
    }
    handelChange=(e)=>{
        const {currentTarget:input}=e;
        let s1={...this.state};
        s1.data2[input.name]=input.value
        
        this.setState(s1);

    }
    handelSubmit=(e)=>{
        let s1={...this.state};
        e.prevntDefault();
        s1.view=1;
        this.setState(s1)

      
    
    }
  render() {
      const{data}=this.state;
      const{country}=this.state.data;
    return (
        <React.Fragment>
            <div className="container">
        <div className="form-group">
                <label>Contry</label>
                <select className="form-control"name="country"id="country"value={country}
                onChange={this.handelChange}>
                    <option disabled value="">Select the Country</option>
                    {data.map((ele)=><option>{ele.country}</option>)}
                </select>
                <button className='btn btn-primary mr-2'onClick={this.handelSubmit}>Submit</button>
            </div>
            </div>
            {/* {view===1?
           <div className="form-group">
            <label>City</label>
            <select className="form-control"name="city"id="country"value={city}onChange={this.handelChange}>
                <option disabled value="">Select the City</option>
                {cities.map((ele)=><option>{ele}</option>)}
            </select>
        </div>:""} */}
            </React.Fragment>
  
    )
  }
}

export default countryForm
