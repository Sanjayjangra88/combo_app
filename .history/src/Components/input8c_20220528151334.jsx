import React, { Component } from 'react'

export class input8c extends Component {
    state={
        marks:this.props.marks,
    }
    handelChange=(e)=>{
        // console.log(e)
        let s1={...this.state};
        s1.marks[e.currentTarget.name]=e.currentTarget.value;
        this.setState(s1)
    }
    handelSubmit=(e)=>{
        e.preventDefault();
        this.props.onSubmitMarks(this.state.marks);
    }
  render() {
      const{math,eng,comp,science}=this.state.marks
    return (
        <div className="container">
         <h5>Enter marks for {this.props.name}</h5>   
        
        <div className="form-group">
            <label>Math</label>
            <input type="text" className="form-control"id="math" name="math"value={math}  placeholder="Enter your Name"onChange={this.handelChange}></input>
        </div>
        <div className="form-group">
            <label>English</label>
            <input type="text" className="form-control"id="eng"name="eng"value={eng} placeholder="Enter your course"onChange={this.handelChange}></input>
        </div>
        <div className="form-group">
            <label>Computer</label>
            <input type="text" className="form-control"id="comp"name="comp"value={comp} placeholder="Enter your year"onChange={this.handelChange}></input>
        </div>
        <div className="form-group">
            <label>Science</label>
            <input type="text" className="form-control"id="science"name="science"value={science} placeholder="Enter your year"onChange={this.handelChange}></input>
        </div>
        <button className='btn btn-primary' onClick={this.handelSubmit}>Submit</button>
    </div>
    )
  }
}

export default input8c
