import React, { Component } from 'react'

export class Evnt12 extends Component {
    state={
        movies:[
            {title:"Terminator",gerns:"Action",stock:6,rating:2.5},
            {title:"Die Hard",gerns:"Action",stock:5,rating:2.5},
            {title:"Get Out",gerns:"Thriller",stock:8,rating:3.5},
            {title:"Trip To Italy",gerns:"Comedy",stock:7,rating:3.5},
            {title:"Airplane",gerns:"Comedy",stock:7,rating:3.5},
            {title:"Wedding Craches",gerns:"Comedy",stock:7,rating:3.5},
            {title:"Gone Girl",gerns:"Thriller",stock:7,rating:4.5},
        ]
    }
  render() {
      const{movies}=this.state;
    return (
        <React.Fragment>
        
        
      <div className="container">
         <div className="row border bg-white text-dark">
          <div className="col-3 "onClick={() => this.sort(0)}>Title</div>
          <div className="col-3  text-center"onClick={() => this.sort(1)}>Gerns</div>
          <div className="col-3  text-center"onClick={() => this.sort(2)}>Stock</div>
          <div className="col-3  text-center"onClick={() => this.sort(3)}>Rating</div>
          </div>
          {movies.map((p1) => {
            let {title,gerns,stock,rating} = p1;
            return(
        
              <div className="row border ">
              <div className="col-3 border">{title}</div>
              <div className="col-3 border text-center">{gerns}</div>
              <div className="col-3 border text-center">{stock}</div>
              <div className="col-3 border text-center">{rating}</div>
              </div>
              )
            })}
          
          </div><br/><br/><br/>
         
       {/* {console.log({p1})}; */}
       
      </React.Fragment>
      
    )
  }
}

export default Evnt12