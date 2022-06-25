import React, { Component } from 'react'

export class dropDown8Form extends Component {
    state={
        works:this.props.works,
        work:["working","Studying"],
    }
    handelChange=(e)=>{
        let s1={...this.state};
        const {currentTarget:input}=e;
        input.type==="checkbox"
        ? input.name==="str"
        ?( s1.works.str = this.updateCBs(
            input.checked,input.value,s1.works.str
            ))
        
         :(s1.costumer[input.name]=input.checked)
         :(s1.costumer[input.name]=input.value);
       
        this.setState(s1);

    }
    updateCBs=(checked,value,arr)=>{
        if(checked)
        console.log("hy") 
            // arr.push(value);
        
        // else{
        //     let index = arr.findIndex((ele) =>ele === value);
        //     if(index >= 0) arr.splice(index,1);
        // }
        return arr;

    }
  render() {
      const{str}=this.state.works;
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
                  name="str"
                  checked={str.findIndex((st)=>st===ele)>=0}
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