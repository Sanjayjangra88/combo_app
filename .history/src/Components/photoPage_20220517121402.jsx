import React, { Component } from 'react'
import PhotoComp from "./photoComp"

export class photoPage extends Component {
    state={
        photos:[
            {image:"https://picsum.photos/id/1/240/200",
             like:23,
             dislike:2,
             myOption:"",
            },
            {image:"https://picsum.photos/id/1025/240/200",
             like:8,
             dislike:0,
             myOption:"",
            },
            {image:"https://picsum.photos/id/1015/240/200",
             like:83,
             dislike:37,
             myOption:"dislike",
            },
            {image:"https://picsum.photos/id/1000/240/200",
            like:19,
            dislike:1,
            myOption:"like",
        },
            {image:"https://picsum.photos/id/1003/240/200",
             like:77,
             dislike:16,
             myOption:"like",
            },
            {image:"https://picsum.photos/id/1002/240/200",
             like:6,
             dislike:3,
             myOption:"",
            },

        ],
        delete:[],
        
    }
    handelLike=(index)=>{
        const s1={...this.state};
        let photo = s1.photos[index];
        let {like,dislike,myOption}=photo;
        if(myOption==="like"){
            like--;
            myOption="";
        }
        else if(myOption==="dislike"){
            like++;
            dislike--;
            myOption="like";
        }else{
            like++;
            myOption="like"
        }
        photo.like=like;
        photo.dislike=dislike;
        photo.myOption=myOption;
        this.setState(s1);
}
handelDislike=(index)=>{
    const s1={...this.state};
    let photo = s1.photos[index];
    let {like,dislike,myOption}=photo;
    if(myOption==="dislike"){
        dislike--;
        myOption="";
    }
    else if(myOption==="like"){
        like--;
        dislike++;
        myOption="dislike";
    }else{
        dislike++;
        myOption="dislike"
    }
    photo.like=like;
    photo.dislike=dislike;
    photo.myOption=myOption;
    this.setState(s1);
}
handelDelete=(index)=>{
    const s1={...this.state};
    let ele = s1.photos[index];
    // let str = s1.photos.findIndex((ele)=>ele.index===s1.photos[index]);
        s1.photos.splice(index,1);
    // console.log(str)
   
    this.setState(s1);

}
  render() {
      const{photos}=this.state;
    return (
      <div className='container'>
          <div className="row">
              {photos.map((ele,index)=>(
              <PhotoComp photo={ele} index={index}onLike={this.handelLike} onDislike={this.handelDislike} onDelete={this.handelDelete}/>
              ))}
          </div>
        
      </div>
    )
  }
}

export default photoPage
