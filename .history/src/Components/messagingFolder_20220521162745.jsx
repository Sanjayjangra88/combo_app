import React, { Component } from 'react'

export class messagingFolder extends Component {
  render() {
    const{data,all}=this.props;
    return (
      <React.Fragment>
      <div class="slidebar slidebarGo">
  
      
          <ul>
              <li><a>Folders</a></li>
              <li><a onClick={()=>all()}>All</a></li>
              <li><a onClick={()=>all()}>Inbox</a></li>
              <li><a onClick={()=>all()}>Social</a></li>
              <li><a onClick={()=>all()}>Sent</a></li>
              </ul>
     
  </div>
  <div className="container text-center">
           
           
              {data.map((p1,index) => {
                let {from,subject} = p1;
                return(
            
                  <div className="row border ">
                  <div className="col-5 ">{from}</div>
                  <div className="col-5  text-center">{subject}</div>
                 </div>
                  )
                })}
              
              </div><br/><br/><br/>
             
          
  </React.Fragment>

    )
  }
}

export default messagingFolder
