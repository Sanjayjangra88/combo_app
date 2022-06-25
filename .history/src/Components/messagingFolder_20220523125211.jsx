import React, { Component } from 'react'

export class messagingFolder extends Component {
  getButton=(read)=>
        read === true ? (
          <i className="fa-solid fa-envelope-open"></i>
        ): (
          <i className="fa-solid fa-envelope"></i>
        )
  getButton1=(read,from)=>
        read === true ? (
          <div className="col-2">{from}</div>
        ): (
          <div className="col-2 fw-bold">{from}</div>
        )
  getButton2=(read,subject)=>
        read === true ? (
          <div className="col-8">{subject}</div>
        ): (
          <div className="col-8 fw-bold">{subject}</div>
        )
  render() {
    const{data}=this.props;
    return (
      <React.Fragment>
     
      
        
  
  <div className="box">
               {data.map((p1,index) => {
                let {from,subject,read,id} = p1;
                return(
            
                  <div key={id} className="row border ">
                  
                  <div className="col-1">{this.getButton(read)}</div>
                  <div className="col-2">{this.getButton1(read,from)}</div>
                  <div className="col-8">{this.getButton2(read,subject)}</div>
                 </div>
                  )
                })}
              
              </div><br/><br/><br/>
         
          
  </React.Fragment>

    )
  }
}

export default messagingFolder
