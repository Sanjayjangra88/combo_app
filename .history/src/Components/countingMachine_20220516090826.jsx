import React, { Component } from 'react';
import Counter from "./counter"


export class CountingMachine extends Component {
    state={
        counter:[
            {id:12,elphabet:"A",count:1},
            {id:23,elphabet:"B",count:2},
            {id:7,elphabet:"C",count:0},
            {id:16,elphabet:"D",count:0}
],
    };
    handelDelete=(id)=>{
        const s1={...this.state};
        let index = s1.counter.findIndex((ele)=>ele.id===id);
        s1.counter.splice(index,1);
        this.setState(s1);
    }
    render(){
        const{counter}=this.state;
        return(
            <React.Fragment>
                {counter.map((ele)=>(
                <Counter counter={ele} onDelete={this.handelDelete}/>
                ))}
            </React.Fragment>
        );
    }
}
    export default CountingMachine;