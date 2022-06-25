import React, {Component} from 'react';
class helloWrold extends Component {
    state ={
        data:[
        {name:'Sanjay',age:24,email:'sanjayjangra0047@gmail.com'},
       ]
    };
    render(){
        let {data}=this.state;
        return(
          
          <h1>{st.name}</h1>
        )
    }
        
      
}
    
export default helloWrold;