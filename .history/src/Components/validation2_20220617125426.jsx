import React, { Component } from 'react'
import Validation2Form from './validation2Form';

export class validation2 extends Component {
    state={
        persons:[
            {name:"Willioms",age:27,country:"",gender:"Male",passport:true,licence:"",city:"" ,passportNumber:"FGYRTS334",designation:"",techKnown:[],},
            {name:"Aana",age:31,country:"",gender:"Female",passport:false,licence:"",city:"" ,passportNumber:"FGYRTS334",designation:"",techKnown:[],},
            {name:"Will",age:27,country:"",gender:"Male",passport:true,licence:"",city:"" ,passportNumber:"FGYRTS334",designation:"",techKnown:[],},
],
    view:0,
    editPersonIndex:-1,
    }
  render() {
    const{persons,view,editPersonIndex}=this.state;
    return(
        <div className="container">
            {view === 0 ? (
                this.showPerson()
            ):(
                <Validation2Form person={editPersonIndex>=0 ?persons[editPersonIndex]:{}}
                onSubmit={this.handelSubmit}
                edit={editPersonIndex>=0}/>
            ) }
        </div>
    );
  }
}

export default validation2
