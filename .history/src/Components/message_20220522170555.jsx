import React, { Component } from 'react'

export class message extends Component {

  render() {
      const{data}=this.props;
    return (
        <React.Fragment>
        <div className="box">
        {data.map((p1,index) => {
         let {from,subject,read,id} = p1;
         return(
     
           <div className="row border ">
           
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

export default message