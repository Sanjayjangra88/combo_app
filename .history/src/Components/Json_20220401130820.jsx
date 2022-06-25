import React, { Component } from 'react'

 class Json extends Component {
     state ={
         students :[
             {name :"willim",maths :34,english:36},
             {name :"George",maths :24,english:31},
             {name :"kethrine",maths :36,english:41},
             {name :"Shopiea",maths :45,english:37},
             {name :"Tomy",maths :22,english:19}
         ]
     }
  render() {
      let {students}=this.state;
    return (
      (<div className="container">
          {students.map(st=>
          <div className="row border">
            <div className="col-5 border">{st.name}</div>
            <div className="col-3 border">{st.maths}</div>
            <div className="col-3 border">{st.english}</div>
            </div>
            )}
            </div>)
    )
  }
}

export default Json
