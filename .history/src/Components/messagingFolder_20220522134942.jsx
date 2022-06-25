import React, { Component } from 'react'

export class messagingFolder extends Component {
  getButton=(read)=>
        read === true ? (
        <button className="btn btn-success btn-sm m-2">Enter</button>
        ): (
        <button className="btn btn-danger btn-sm m-2">Exit</button>
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
                  
                  <div className="col-2">{this.getButton(read)}</div>
                  <div className="col-5 ">{from}</div>
                  <div className="col-5 ">{subject}</div>
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
