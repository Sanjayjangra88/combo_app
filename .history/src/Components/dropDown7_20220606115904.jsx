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
        data3:""
    }
    handelSubmit=(data2)=>{
        let s1={...this.state};
        // console.log(d)
    let ja=s1.data.find((ele)=>ele.country===data.country)
        
        s1.data3=ja;
        this.setState(s1)
        console.log(ja)


    }
  render() {
      const{data,data3}=this.state;
      
    return (
      <CountryForm data={data}data2={{}}onSubmit={this.handelSubmit}data3={data3}/>
    )
  }
}

export default dropDown7
