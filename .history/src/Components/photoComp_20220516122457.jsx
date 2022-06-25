import React, { Component } from 'react'

export class photoComp extends Component {
    bgColor=(ele)=>
        ele === "like"
        ? "bg-success"
        : ele === "dislike"
        ? "bg-warning"
        : "bg-light"

    
  render() {
      const{photo}=this.props;
      const{img,like,dislike,myOption}=photo;
    return (
      <div className={"col-4 border text-center m-2 "+this.bgColor(myOption)}>
          <img src={img}></img><br/>
          <i className={myOption=== "like"?"fas fa-thumbs-up m-2":"far fa-thumbs-up m-1"}>{like}</i>
          <i className={myOption==="dislike"?"fas fa-thumbs-down m-1":"far fa-thumbs-down m-1"}>{dislike}</i>
           
        
      </div>
    )
  }
}

export default photoComp
