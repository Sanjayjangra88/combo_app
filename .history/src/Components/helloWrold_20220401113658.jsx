import React, {Component} from 'react';
class helloWrold extends Component {
    state ={
        s1:'hy',
        s2:'hello',
        s3:'how are you'
    };
    render(){
        let {s1,s2,s3} = this.state;
        return(
        <React.Fragment>
        <h1>{s1}</h1>;
         <p>{s2}</p> 
         <h1>{s3}</h1>;
        </React.Fragment>
        )
    }
    
}
export default helloWrold;