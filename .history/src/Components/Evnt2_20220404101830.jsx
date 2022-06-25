import React, { Component } from 'react'

class Evnt2 extends Component {
    state ={
        persons :[
            {name :"Jack",age:25,skills:"Javascript, React",email:"jack@gmail.com",mobile:"2345447788"},
            {name :"Anna",age:29,skills:"Node.js ,MongoDb",email:"anna@gmail.com",mobile:"2345447766"},
            {name :"Steve",age:31,skills:"Android app Devloper",email:"steve@gmail.com",mobile:"2345447733"},
        ]
    }
  render() {
      const {persons} = this.state
    return (
     <React.Fragment>
         {persons.map((p1)=>(
             <button className='btn btn-primary m-2'>{p1.name}</button>
          ) )}
         {persons.name}
     </React.Fragment>
    )
  }
}

export default Evnt2