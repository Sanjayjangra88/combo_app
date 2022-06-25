import React, { Component } from 'react'
import PhotoComp from "./photoComp"

export class photoPage extends Component {
    state={
        photos:[
            {img:"https://picsum.photos/id/1/240/200",
             like:23,
             dislike:2,
             myOption:"",
            },
            {img:"https://picsum.photos/id/1025/240/200",
             like:8,
             dislike:0,
             myOption:"",
            },
            {img:"https://picsum.photos/id/1015/240/200",
             like:83,
             dislike:37,
             myOption:"dislike",
            },
            {img:"https://picsum.photos/id/1000/240/200",
            like:19,
            dislike:1,
            myOption:"like",
        },
            {img:"https://picsum.photos/id/1003/240/200",
             like:77,
             dislike:16,
             myOption:"like",
            },
            {img:"https://picsum.photos/id/1002/240/200",
             like:6,
             dislike:3,
             myOption:"",
            },

        ],
        onLike
    }
  render() {
      const{photos}=this.state;
    return (
      <div className='container'>
          <div className="row">
              {photos.map((ele,index)=>(
              <PhotoComp photo={ele} index={index}/>
              ))}
          </div>
        
      </div>
    )
  }
}

export default photoPage
