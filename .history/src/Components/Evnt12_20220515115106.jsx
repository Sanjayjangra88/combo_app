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
    sort=(colnum)=>{
        const {movies}=this.state;
        let a2 ={...this.state}
   
       if(colnum===0){
       a2= movies.sort((p1,p2)=>p1.title.localeCompare(p2.title));
       this.setState(a2);
      }
      else if(colnum===1){
       a2= movies.sort((p1,p2)=>p1.gerns.localeCompare(p2.gerns));
       this.setState(a2);
      }
      else if(colnum===2){
        a2= movies.sort((p1,p2)=>(+p1.stock)-(+p2.stock));
        
        this.setState(a2);
    }
      else{
        a2= movies.sort((p1,p2)=>(+p1.rating)-(+p2.rating));
        this.setState(a2);
    }
    }
    delete=(title)=>{
        const {movies}=this.state;
        let a2 ={...this.state}
        console.log(title);
        let str= movies.findIndex((ele)=>{ele.title==title });str>0 ? movies.splice(str,1):''
        //  movies.splice(index,1)
        //  console.log(index);
        // this.setState({a2});
         

    }
  render() {
      const{movies}=this.state;
    return (
        <React.Fragment>
        
        <h4 className='text-center'>Showing {movies.length} Movies</h4>
      <div className="container">
         <div className="row border bg-white text-dark">
          <div className="col-3 "onClick={() => this.sort(0)}>Title</div>
          <div className="col-3  text-center m-2"onClick={() => this.sort(1)}>Gerns</div>
          <div className="col-2  text-center m-2"onClick={() => this.sort(2)}>Stock</div>
          <div className="col-2  text-center m-2"onClick={() => this.sort(3)}>Rating</div>
          <div className="col-2  text-center "></div>
          </div>
          {movies.map((p1,i) => {
            let {title,gerns,stock,rating} = p1;
            return(
        
              <div className="row border">
              <div className="col-3 ">{title}</div>
              <div className="col-3  text-center">{gerns}</div>
              <div className="col-2  text-center">{stock}</div>
              <div className="col-2  text-center">{rating}</div>
             <div className="col-2"> <button className="btn btn-danger m-2" onClick={()=>this.delete(title)}>Delete</button></div>

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