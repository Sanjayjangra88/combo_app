import React, { Component } from 'react'

class Evnt2 extends Component {
    state ={
        persons :[
            {name :"Jack",age:25,skills:"Javascript, React",email:"jack@gmail.com",mobile:"2345447788"},
            {name :"Anna",age:29,skills:"Node.js ,MongoDb",email:"anna@gmail.com",mobile:"2345447766"},
            {name :"Steve",age:31,skills:"Android app Devloper",email:"steve@gmail.com",mobile:"2345447733"},
        ],
        indexPersons :0,
    }
    setIndex = (index)=>{
        let s1 ={...this.state};
        s1.indexPersons = index;
        this.setState(s1);
    }
    showPersons =()=>{
        
        const {persons,indexPersons} =this.state;
        return(
            <React.Fragment>
        Name: {persons[indexPersons].name}<br/>
        Age: {persons[indexPersons].age}<br/>
        Name: {persons[indexPersons].skills}<br/>
        <button className='btn btn-primary m-1'>Contact Info</button>

        </React.Fragment>
        )
    }
  render() {
      const {persons,indexPersons} = this.state
    return (
     <React.Fragment>
         {persons.map((p1,index)=>(
             <button className='btn btn-primary m-2'onClick={()=>this.setIndex(index)}>{p1.name}</button>
          ) )}
          <br/>

         {indexPersons=0 ? this.showPersons() :""}
     </React.Fragment>
    )
  }
}

export default Evnt2