import React, { Component } from 'react'

export class countryForm extends Component {
    state={
        data:this.props.data,
        data2:this.props.data2,
        data3:this.props.data3,
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
        e.preventDefault();
        this.props.onSubmit(this.state.data2)
        
        this.setState(s1)

      
    
    }
  render() {
      const{data,view,data3}=this.state;
      const{country,city}=this.state.data2
      const cities = country? data.find((ele)=>ele.country===country).cities:[]
       console.log(country)

      
    return (
        <React.Fragment>
            <div className="container">
        <div className="form-group">
                <label>Conutry</label>
                <select className="form-control"name="country"id="country"value={country}
                onChange={this.handelChange}>
                    <option disabled value="">Select the Country</option>
                    {data.map((ele)=><option>{ele.country}</option>)}
                </select>
               
            <select className="form-control"name="city"id="country"value={city} onChange={this.handelChange}>
                <option disabled value="">Select the City</option>
                {cities.map((ele)=><option>{ele}</option>)}
            </select>
            <button className='btn btn-primary m-2'onClick={this.handelSubmit}>Submit</button>
        </div>
        </div>
        
            </React.Fragment>
  
    )
  }
}

export default countryForm
