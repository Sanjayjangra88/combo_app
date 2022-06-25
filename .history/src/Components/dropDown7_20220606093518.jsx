import React, { Component } from 'react'

export class dropDown7 extends Component {
    state={
        data:[
            {country: "India",cities: ["New Delhi", "Mumbai", "Bangalore", "Chennai", "Pune"]},
            {country: "USA",cities: ["Los Angeles", "Chicago", "New York", "Seattle", "Washington DC"]},
            {country: "France", cities: ["Paris", "Nice", "Lyon", "Cannes"]},
            {country: "Japan", cities: ["Tokyo", "Kyoto"]},
            {country: "China", cities: ["Shanghai", "Beijing", "Shenzen"]}
        ]
    }
  render() {
      const{data}=this.state;
      const{country}=data
      console.log(data)
    return (
      <div className='container'>
            <div className="form-group">
                    <label>Contry</label>
                    <select className="form-control"name="country"id="country"
                    onChange={this.handelChange}>
                        <option disabled value="">Select the Country</option>
                        {data.map((ele)=><option>{ele.country}</option>)}
                    </select>
                </div>
        
      </div>
    )
  }
}

export default dropDown7
