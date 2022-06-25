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
        }
        render(){
            const{persons,view,editPersonIndex}=this.state;
            return(
                <div className="container">
                    {view===0 ?(
                        this.showPerson()
                    ):(
                        <SimpleForm person={editPersonIndex>=0 ?persons[editPersonIndex]:{}}
                        onSubmit={this.handelSubmit}
                        edit={editPersonIndex>=0}/>
                    ) }
                </div>
            )
        }
}

        
//         // countrys:[
//         //     "United state of amarica",
//         //     "Canada",
//         //     "India",
//         //     "United Kingdom",
//         // ],
//         // countryList:[
//         //     {country:"United state of amarica",cities:["New York","Losangles","Seattle","San Fransisco"]},
//         //     {country:"Canada",cities:["Toronto","Montreal","Vancouver"]},
//         //     {country:"India",cities:["Delhi","Bengluru","Pune","Mumbai"]},
//         //     {country:"United Kingdom",cities:["London","Bristial","Manchester"]},
//         // ],
//         // designations:[
//         //     "Devloper",
//         //     "Senior Devloper",
//         //     "Team Leader",
//         //     "ArchiTech",
//         //     "Delivery Manager"
//         // ],
//         // tech:[
//         //     "React","JavaScricpt","JQuery","AngularJS"
//         // ]
//     }
//     // handelChange=(e)=>{
//     //     const {currentTarget:input}=e;
//     //     let s1={...this.state};
//     //     input.type==="checkbox"?
//     //     input.name==="techKnown"?( s1.persons.techKnown=this.updateCBs(input.checked,input.value,s1.persons.techKnown)):
//     //      s1.persons[input.name]=input.checked:
//     //     s1.persons[input.name]=input.value;
//     //     if(input.name==="country") s1.persons.city="";
//     //     if(!s1.persons.passport) s1.persons.passportNumber = "";
//     //     this.setState(s1);

//     // }
//     // updateCBs=(checked,value,arr)=>{
//     //     if(checked) arr.push(value)
//     //     else{
//     //         let index = arr.findIndex((ele)=>ele===value)
//     //         if(index>=0) arr.splice(index,1);
//     //     }
//     //     return arr;

//     // }
//     // handelSubmit=(e)=>{
//     //   e.preventDefault();
//     // }
//     render(){
//         const{name,age,country,gender,passport,licence,city,passportNumber,designation,techKnown}=this.state.persons;
//         const{countrys,countryList,designations,tech}=this.state;
//         const cities = country? countryList.find((ele)=>ele.country===country).cities:[]
//         return(
//             <div className="container">
//                 <h5>Enter New Details</h5>
//                 <div className="form-group">
//                     <label>Name</label>
//                     <input type="text"className="form-control"name="name"id="name"placeholder='Enter the name'value={name}onChange={this.handelChange} />
//                 </div>
//                 <div className="form-group">
//                     <label>Age</label>
//                     <input type="number"className="form-control"id="age"name='age' placeholder='Enter the name'value={age}onChange={this.handelChange} />
//                 </div>
//                 <div className="form-group">
//                     <label>Contry</label>
//                     <select className="form-control"name="country"id="country"value={country}onChange={this.handelChange}>
//                         <option disabled value="">Select the Country</option>
//                         {countrys.map((ele)=><option>{ele}</option>)}
//                     </select>
//                 </div>
//                 {country? <div className="form-group">
//                     <label>City</label>
//                     <select className="form-control"name="city"id="country"value={city}onChange={this.handelChange}>
//                         <option disabled value="">Select the City</option>
//                         {cities.map((ele)=><option>{ele}</option>)}
//                     </select>
//                 </div> :""}
//                 <div className="form-check form-check-inline">
//                     <input 
//                     className="form-check-input"
//                     type="radio"
//                     name="gender"
//                     value="Male"
//                     checked={gender==="Male"}
//                     onChange={this.handelChange}/>
//                     <label className="form-check-label">Male</label>
//                 </div>
//                 <div className="form-check form-check-inline">
//                     <input 
//                     className="form-check-input"
//                     type="radio"
//                     name="gender"
//                     value="Female"
//                     checked={gender==="Female"}
//                     onChange={this.handelChange}/>
//                     <label className="form-check-label">Female</label>
//                 </div>
//                 <div className="form-check">
//                     <input className="form-check-input"type="checkbox"value={passport} name="passport"checked={passport}onChange={this.handelChange}/>
//                     <label className="form-check-label">Passport</label>
//                 </div>
//                 {passport? <div className="form-group">
//                     <label>Passport Number</label>
//                     <input type="text"className="form-control"name="passportNumber"id="passportNumber"placeholder='Enter the passport Number'value={passportNumber}onChange={this.handelChange} />
//                 </div>:""}
//                 <div className="form-check">
//                     <input className="form-check-input"type="checkbox"value={licence} name="licence"checked={licence}onChange={this.handelChange}/>
//                     <label className="form-check-label">Licence</label>
//                 </div>
//                 <label className="form-check-label font-weight-bold">Choose Designation</label><br/>
//                 {designations.map((ele)=>(
//                      <div className="form-check form-check-inline">
//                      <input 
//                      className="form-check-input"
//                      type="radio"
//                      name="designation"
//                      value={ele}
//                      checked={designation===ele}
//                      onChange={this.handelChange}/>
//                      <label className="form-check-label">{ele}</label>
//                  </div>
//                 ))}
//                <br/>
//                 <label className="form-check-label font-weight-bold">Tech</label>
//                 {tech.map((ele)=>(<div className="form-check">
//                     <input className="form-check-input"type="checkbox"value={ele} name="techKnown"
//                     checked={techKnown.findIndex((e)=>e===ele)>=0}onChange={this.handelChange}/>
//                     <label className="form-check-label">{ele}</label>
//                 </div>))}
//                 <br/>
//                 <button className='btn btn-primary'onClick={this.handelSubmit}>Submit</button>
//             </div>
//         )


//     }
// }


export default dropDown3
