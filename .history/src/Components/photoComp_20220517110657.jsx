import React, { Component } from 'react'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export class photoComp extends Component {
    bgColor=(ele)=>
        ele === "like"
        ? "bg-success"
        : ele === "dislike"
        ? "bg-warning"
        : "bg-light"

    
  render() {
      const{photo,onLike,onDislike,index}=this.props;
      const{image,like,dislike,myOption}=photo;
    return (
      <div className={"col-4 border text-center "+this.bgColor(myOption)}>
          <img src={image}></img><br/>
          <i className={myOption=== "like"?"fas fa-thumbs-up m-2":"far fa-thumbs-up m-1"}onClick={()=> onLike(index)}>{like}</i>
          <i className={myOption==="dislike"?"fas fa-thumbs-down m-1":"far fa-thumbs-down m-1"}onClick={()=> onDislike(index)}>{dislike}</i>
          <i className="fas fa-trash-can">{like}</i>
          <FontAwesomeIcon icon={["fal", "coffee"]} />
          
        
      </div>
    )
  }
}

export default photoComp
