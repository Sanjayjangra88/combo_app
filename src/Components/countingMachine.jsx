import React, { Component } from 'react';
import Counter from "./counter"


export class CountingMachine extends Component {
    state={
        counter:[
            {id:12,elphabet:"A",count:0},
            {id:23,elphabet:"B",count:0},
            {id:7,elphabet:"C",count:0},
            {id:16,elphabet:"D",count:0}
],
   data:'',
    };
    handelDelete=(id)=>{
        const s1={...this.state};
        let index = s1.counter.findIndex((ele)=>ele.id===id);
        s1.counter.splice(index,1);
        this.setState(s1);
    }
    handelIncrement=(id)=>{
        const s1={...this.state};
        let counter = s1.counter.find((ele)=>ele.id===id);
        counter.count++;
        s1.data+=counter.elphabet;
        this.setState(s1);
    }
    handelReset=()=>{
        const s1={...this.state};
        let str=s1.counter.map((ele)=>({id:ele.id,elphabet:ele.elphabet,count:0}));
        s1.counter=str;
        s1.data='';
        this.setState(s1);

    }
    render(){
        const{counter,data}=this.state;
        return(
            <React.Fragment>
                {counter.map((ele)=>(
                <Counter counter={ele} onDelete={this.handelDelete}onIncrement={this.handelIncrement}/>
                ))}
                <button className='btn btn-danger btn-sm m-2'onClick={()=>this.handelReset()}>Increment</button>
                <h6>Alphabet= {data}</h6>
            </React.Fragment>
        );
    }
}
    export default CountingMachine;