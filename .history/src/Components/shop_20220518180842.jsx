import React, { Component } from 'react'

export class shop extends Component {
  render() {
      const{mobile,onCart}=this.props;
      const{name,desc,price,id}=mobile
    return (
        <div className="col-3 border text-center m-4 bg-warning">
        <h5>{name}({desc[0]})</h5><br/>
        <h6>{desc[1]}</h6><br/>
        <button className="btn btn-light btn-sm m-2"onClick={()=>onCart(id)}>Just {price}</button>
      </div>
    )
  }
}

export default shop