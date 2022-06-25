import React, { Component } from 'react'

export class photoComp extends Component {
  render() {
      const{photo}=this.props.photo;
      const{img,like,dislike}=photo;
    return (
      <div className='col-4 border'>
          <img src={img}></img><br/>
          {like}{dislike}
        
      </div>
    )
  }
}

export default photoComp
