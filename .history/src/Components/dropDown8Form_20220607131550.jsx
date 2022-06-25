import React, { Component } from 'react'

export class dropDown8Form extends Component {
    state={
        works:this.props.works,
        work:["working","Studying"],
    }
  render() {
      const{works}=this.state.works;
      const{work}=this.state;

    return (
        <div className='container border'>
        <label className='form-check-label font-weight-bold'>Provide Details Below</label>
         {work.map((ele,index)=>(
             <div className="form-check">
                 <input 
                  className='form-check-input'
                  value={ele}
                  type="checkbox"
                  name="works"
                  checked={works.findIndex((st)=>st===ele)>=0}
                  onChange={this.handelChange}
                 />
                 <label className='form-check-label'>{ele}</label>
             </div>
         ))}
 </div>
    )
  }
}

export default dropDown8Form