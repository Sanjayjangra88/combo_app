import React, { Component } from 'react'

export class message extends Component {
    

  render() {
      const{second,back,remove}=this.props;
      const{id}=second;
    return (
        <React.Fragment>
            <div className="d-flex justify-content-between">
            <div className="p-2 bd-highlight">
                <i className="fa-solid fa-arrow-left"onClick={()=>back()}></i>
                </div>
  <div className="p-2 bd-highlight">
      <i className="fa-solid fa-trash-can"onClick={()=>remove(id)}></i>
      </div>
                
            </div>
        <div className="box">
        {second.map((p1) => {
         let {from,subject,read,id} = p1;
         return(
          <div key={id} className="row border ">
          <div className="col-8">{subject}</div>
          </div>
           )
         })}
       
       </div><br/><br/><br/>
       </React.Fragment>
    )
  }
}

export default message