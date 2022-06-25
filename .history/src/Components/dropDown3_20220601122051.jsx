import React, { Component } from 'react'
import SimpleForm from './simpleForm'
export class dropDown3 extends Component {
    state={
        persons:[
                 {name:"Willioms",age:27,country:"",gender:"Male",passport:true,licence:"",city:"" ,passportNumber:"FGYRTS334",designation:"",techKnown:[],},
                 {name:"Aana",age:31,country:"",gender:"Female",passport:false,licence:"",city:"" ,passportNumber:"FGYRTS334",designation:"",techKnown:[],},
                 {name:"Willioms",age:27,country:"",gender:"Male",passport:true,licence:"",city:"" ,passportNumber:"FGYRTS334",designation:"",techKnown:[],},
    ],
         view:0,
         editPersonIndex:-1,
}
         handelSubmit=(person)=>{
            let s1={...this.state};
            s1.editPersonIndex>=0 ?  
            (s1.persons[s1.editPersonIndex]=person):
            s1.persons.push(person);
            s1.view=0;
            s1.editPersonIndex=-1;
            this.setState(s1);
        }
        editPerson=(index)=>{
            let s1={...this.state};
            s1.view=1;
            s1.editPersonIndex=index;
            this.setState(s1);
        }
        showForm=()=>{
            let s1={...this.state};
            s1.view=1;
            s1.editPersonIndex=-1;
            this.setState(s1)
        }
        showPerson=()=>{
            <h4>hyyyy</h4>
            // <React.Fragment>
            //     <h4>Details of Persons</h4>
            //     {this.state.persons.map((ele,index)=>(
            //         <div className="row border">
            //          <div className="col-4 border">{ele.name}</div>
            //          <div className="col-4 border">{ele.age}</div>
            //          <div className="col-4 border">
            //              <button className="btn btn-warning btn-sm mr-2"onClick={()=>this.editPerson(index)}>Edit</button>
            //              <button className="btn btn-danger btn-sm mr-2"onClick={()=>this.deletePerson(index)}>Delete</button>
            //          </div>
            //         </div>
            //     ))}
            //     <button className="btn btn-primary"onClick={()=>this.showForm()}>Add Person</button>
            // </React.Fragment>
        }
        render(){
            const{persons,view,editPersonIndex}=this.state;
            return(
                <div className="container">
                    {view === 0 ? (
                        // <h4>hy</h4>
                        this.showPerson()
                    ):(
                        <SimpleForm person={editPersonIndex>=0 ?persons[editPersonIndex]:{}}
                        onSubmit={this.handelSubmit}
                        edit={editPersonIndex>=0}/>
                    ) }
                </div>
            );
        }
}



export default dropDown3
