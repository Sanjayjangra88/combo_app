import React, { Component } from 'react'

export class photoComp extends Component {
  render() {
      const{photo}=this.props;
      const{img,like,dislike}=photo;
    return (
      <div className='col-4 border'>
          <img src={img}></img><br/>
          <i className={myOption=== "like"?'fas fa-thumbs-up m-2':'fas fa-thumbs-up m-2'}>{like}</i>
          <i className='fas fa-thumbs-down m-1'>{dislike}</i>
           
        
      </div>
    )
  }
}

export default photoComp
