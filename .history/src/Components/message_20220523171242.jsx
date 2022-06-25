import React, { Component } from 'react'

export class message extends Component {
    

  render() {
      const{second,back,remove,id}=this.props;

      
    return (
        <React.Fragment>
            <div className="container">
                {second.map((p1) => {
         const{from,subject,text,id,to} = p1;
         return(
            <div className="d-flex justify-content-between">
            <div className="p-2 bd-highlight">
                <i className="fa-solid fa-arrow-left"onClick={()=>back()}></i>
                </div>
  <div className="p-2 bd-highlight">
  
      <i className="fa-solid fa-trash-can"onClick={()=>remove(id)}></i>
      </div>
                
            </div>
              )
            })}
            </div>
        <div className="box">
        {second.map((p1) => {
         const{from,subject,text,id,to} = p1;
         return(
          <div key={id} className="row border ">
          From : {from}<br/>
          To : {to}<br/>
          Subject : {subject}<br/>
          {text.split( '\n' ).map( ( item ) => <> { item } <br /> </>) }
         
          </div>
           )
         })}
       
       </div><br/><br/><br/>
       </React.Fragment>
    )
  }
}

export default message