import React, { Component } from 'react';
import Props1p2 from './propsP2';


export class PropsP1 extends Component {
    state={
        counter:[
            {id:12,elphabet:"A",count:1},
            {id:23,elphabet:"B",count:2},
            {id:7,elphabet:"C",count:0},
            {id:16,elphabet:"D",count:0}

        ]
    }
    render(){
        const{props1p2}=this.state;
        return(
            <React.Fragment>
                {props1p2.map((ele)=>(
                <Props1p2/>
                ))}
            </React.Fragment>
        )
    }
}
    export default PropsP1