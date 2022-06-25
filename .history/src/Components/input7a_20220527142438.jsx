import React, { Component } from 'react'
import Input7b from './input7b'

export class input7a extends Component {
    state={
        costumers:[],
        view:0,
    }
    ok=()=>{
        let s1={...this.state};
        s1.view=2;
        this.setState(s1)
        console.log("hy")
    }
    list=()=>{
        let s1={...this.state};
        s1.view=1;
        this.setState(s1)
        console.log("hy")
    }
    handelSubmit=(costum)=>{
        console.log("hy")
        let s1={...this.state};
        s1.costumers.push(costum);
        s1.view=0;
        this.setState(s1)
    }
  render() {
      const{costumers,view}=this.state;
      let costum={name:"",age:"",email:""}
    return(
        <React.Fragment>
      <div className='container'><br/>
      <h5>Welcome to the costumer system</h5><br/>
          <button className='btn btn-primary btn-sm mr-2'onClick={()=>this.ok()}>New costumer</button>
          <button className='btn btn-primary btn-sm'onClick={()=>this.list()}>List of costumer</button>
          <br/><br/></div>

       {view===1?
      (costumers.length===0
        ?
        <div className='container'>There are no costumer</div>
        :
          <div className="container">
                 <div className='row bg-primary text-white'>
                <div className="col border">Name</div>
                <div className="col border">Age</div>
                <div className="col border">Email</div>
                <div className="col border"></div>
            </div>
             {costumers.map((ele)=>
                <div className='row border'>
                <div className="col border">{ele.name}</div>
                <div className="col border">{ele.age}</div>
                <div className="col border">{ele.email}</div>
                <div className="col border"><button>Edit</button></div>
            </div>
        
            )
      }</div>
     )
     :view===2?
     <Input7b costum={costum}onSubmit={this.handelSubmit}/>:""
     }
 
      </React.Fragment>    
    )
    
  }
}

export default input7a