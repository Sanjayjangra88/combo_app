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
        ]
    }
    handelSubmit=(data2)=>{
        let s1={...this.state};
        console.log(data2.country)
        s1.data.find((ele)=>ele.country===data2.country)
        console.log(s1.data.country)

    }
  render() {
      const{data}=this.state;
      
      console.log(data)
    return (
      <CountryForm data={data}data2={{}}onSubmit={this.handelSubmit}/>
    )
  }
}

export default dropDown7
