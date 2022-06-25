import React, { Component } from 'react'

export class photoPage extends Component {
    state={
        photos:[
            {img:"https//picsum.photos/id/1032/240/160",like:23,dislike:2,myOption:""},
            {img:"https//picsum.photos/id/1051/240/160",like:08,dislike:00,myOption:""},
            {img:"https//picsum.photos/id/1079/240/160",like:83,dislike:37,myOption:"dislike"},
            {img:"https//picsum.photos/id/1084/240/160",like:19,dislike:01,myOption:"like"},
            {img:"https//picsum.photos/id/122/240/160",like:77,dislike:16,myOption:"like"},
            {img:"https//picsum.photos/id/164/240/160",like:06,dislike:03,myOption:""},

        ]
    }
  render() {
      const{photos}=this.state;
    return (
      <div className='container'>
          <div className="row">
              {photos.map(ele=><PhotoComp photo={ele}/>)}
          </div>
        
      </div>
    )
  }
}

export default photoPage
