import React, {Component} from 'react';
class helloWrold extends Component {
    state ={
       s1: "Name Sanjay",
       s2: "Age 24",
       s3: "Email sanjayjangra0047@gmail.com"
    };
    string =()=>{
        let {name,age,email} = this.state;
    return(
        <React.Fragment>
        <h1>{s1}</h1>
         <h2>{s2}</h2> 
         <h2>{s3}</h2>
        </React.Fragment>
        );
    };
    render(){
    return   <React.Fragment>{this.string()}</React.Fragment>
    }
}
export default helloWrold;