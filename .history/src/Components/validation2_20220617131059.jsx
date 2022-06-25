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
  
    showPerson=()=>(
        
        <React.Fragment>
                <h4>Details of Persons</h4>
                {this.state.persons.map((ele,index)=>(
                    <div className="row border">
                     <div className="col-4 border">{ele.name}</div>
                     <div className="col-4 border">{ele.age}</div>
                     <div className="col-4 border">
                         <button className="btn btn-warning btn-sm mr-2"onClick={()=>this.editPerson(index)}>Edit</button>
                         <button className="btn btn-danger btn-sm mr-2"onClick={()=>this.deletePerson(index)}>Delete</button>
                     </div>
                    </div>
                ))}
                <button className="btn btn-primary"onClick={()=>this.showForm()}>Add Person</button>
            </React.Fragment>
    )
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
