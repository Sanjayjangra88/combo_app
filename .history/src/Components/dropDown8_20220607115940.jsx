import React, { Component } from 'react'
import DropDown8Form from './dropDown8Form'

export class dropDown8 extends Component {
    state={
        work:["working","studying"],
        works:[]
    }
  render() {
      const{work,works}=this.state;
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
                       checked={ele}
                       onChange={this.handelChange}
                      />
                      <label className='form-check-label'>{ele}</label>
                  </div>
              ))}
      </div>
    )
  }
}

export default dropDown8