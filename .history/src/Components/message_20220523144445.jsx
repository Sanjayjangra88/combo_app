import React, { Component } from 'react'

export class message extends Component {
    

  render() {
      const{second}=this.props;
    return (
        <React.Fragment>
            <div className="container">
                hy
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