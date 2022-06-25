import React, { Component } from 'react'

export class messagingFolder extends Component {
  getButton=(read)=>
        read === true ? (
          <i class="fa-solid fa-envelope-open"></i>
        ): (
          <i class="fa-solid fa-envelope"></i>
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
    const{data,all}=this.props;
    return (
      <React.Fragment>
     
      
        <div className="slidebar">
  
      
          <ul>
              <li><a>Folders</a></li>
              <li><a onClick={()=>all(0)}>All</a></li>
              <li><a onClick={()=>all(1)}>Inbox</a></li>
              <li><a onClick={()=>all(2)}>Social</a></li>
              <li><a onClick={()=>all(3)}>Sent</a></li>
              </ul>
             </div>
  
  <div className="box">
               {data.map((p1,index) => {
                let {from,subject,read,id} = p1;
                return(
            
                  <div className="row border ">
                  
                  <div className="col-1">{this.getButton(read)}</div>
                  <div className="col-2">{this.getButton1(read,from)}</div>
                  <div className="col-8">{this.getButton2(read,subject)}</div>
                  
                  <i class="bi bi-envelope"></i>
                 </div>
                  )
                })}
              
              </div><br/><br/><br/>
         
          
  </React.Fragment>

    )
  }
}

export default messagingFolder
