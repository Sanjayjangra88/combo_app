import React, { Component } from 'react'

export class messagingFolder extends Component {
  getButton=(read)=>
        read === true ? (
          <i class="fa-solid fa-envelope-open"></i>
        ): (
          <i class="fa-solid fa-envelope"></i>
        )
  render() {
    const{data,all}=this.props;
    return (
      <React.Fragment>
     
      
        <div className="slidebar">
  
      
          <ul>
              <li><a>Folders</a></li>
              <li><a onClick={()=>all()}>All</a></li>
              <li><a onClick={()=>all()}>Inbox</a></li>
              <li><a onClick={()=>all()}>Social</a></li>
              <li><a onClick={()=>all()}>Sent</a></li>
              </ul>
             </div>
  
  <div className="box">
               {data.map((p1,index) => {
                let {from,subject,read,id} = p1;
                return(
            
                  <div className="row border ">
                  
                  <div className="col-1">{this.getButton(read)}</div>
                  {read===false}?
                  <div className="col-2 text-bold">{from}</div>
                  <div className="col-4 text-bold">{subject}</div>:
                  <div className="col-2 ">{from}</div>
                  <div className="col-4 ">{subject}</div>
                  
                 </div>
                  )
                })}
              
              </div><br/><br/><br/>
         
          
  </React.Fragment>

    )
  }
}

export default messagingFolder
