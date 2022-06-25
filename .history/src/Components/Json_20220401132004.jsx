import React, { Component } from 'react'

 class Json extends Component {
     state ={
         students :[
             {name :"Willim",maths :34,english:36},
             {name :"George",maths :24,english:31},
             {name :"kethrine",maths :36,english:41},
             {name :"Shopiea",maths :45,english:37},
             {name :"Tomy",maths :22,english:19}
         ]
     }
     getColor =(m1,m2)=>{
         (m1+m2)>60 ? "bg-success":"bg-danger"
     }
  render() {
      let {students}=this.state;
    return (
      (<div className="container">
           <div className="row border bg-primary text-white">
            <div className="col-6 border">Name</div>
            <div className="col-3 border text-center">Math</div>
            <div className="col-3 border text-center">English</div>
            </div>
          {students.map(st=>
          <div className={"row border"+this.getColor(st.maths,st.english)}>
            <div className="col-6 border">{st.name}</div>
            <div className="col-3 border text-center">{st.maths}</div>
            <div className="col-3 border text-center">{st.english}</div>
            </div>
            )}
            </div>)
    )
  }
}

export default Json
