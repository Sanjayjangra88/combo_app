import React, { Component } from 'react'
import CountryForm from './countryForm';

export class dropDown7 extends Component {
    state={
        data:[
            {country: "India",cities: ["New Delhi", "Mumbai", "Bangalore", "Chennai", "Pune"]},
            {country: "USA",cities: ["Los Angeles", "Chicago", "New York", "Seattle", "Washington DC"]},
            {country: "France", cities: ["Paris", "Nice", "Lyon", "Cannes"]},
            {country: "Japan", cities: ["Tokyo", "Kyoto"]},
            {country: "China", cities: ["Shanghai", "Beijing", "Shenzen"]}
        ],
        data3:[],
        data2:{country:""}
    }
    onSubmit=(data2)=>{
        let s1={...this.state};
        console.log(data2.country)
    let s2= s1.data.find(function(ele){
        if(ele.country===data2.country)
    return ele
           })
          
         s1.data3=s2.cities;
         this.setState(s1);
        // console.log(s1.data3)


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
        this.onSubmit(this.state.data2)
        s1.view=1;
        this.setState(s1)

      
    
    }
  render() {
      const{data,data3}=this.state;
      const{country}=this.state.data3
      console.log(data3)

      
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
           
            
            {country? <div className="form-group">
                    <label>City</label>
                    <select className="form-control"name="city"id="country"value={city}onChange={this.handelChange}>
                        <option disabled value="">Select the City</option>
                        {data.cities.map((ele)=><option>{ele}</option>)}
                    </select>
                </div> :""}
        </div>
            </React.Fragment>    )
  }
}

export default dropDown7
