import React, {Component} from 'react';
class helloWrold extends Component {
    state ={
        data:[
        {name:'Sanjay'},
        {age:24},
        {email:'sanjayjangra0047@gmail.com'}
        ]
    };
    string =()=>{
        let {name,age,email} = this.state;
    return(
        <React.Fragment>
        <h1>{name}</h1>
         <h2>{age}</h2> 
         <h2>{email}</h2>
        </React.Fragment>
        );
    };
    render(){
    return   <React.Fragment>{this.string()}</React.Fragment>
    }
}
export default helloWrold;