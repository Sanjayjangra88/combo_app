import React, { Component } from 'react'

export class Evnt12 extends Component {
    state={
        movies:[
            {title:"Terminator",gerns:"Action",stock:6,rating:2.5},
            {title:"Die Hard",gerns:"Action",stock:5,rating:2.5},
            {title:"Get Out",gerns:"Thriller",stock:8,rating:3.5},
            {title:"Trip To Italy",gerns:"Comedy",stock:7,rating:3.5},
            {title:"Airplane",gerns:"Comedy",stock:7,rating:3.5},
            {title:"Wedding Craches",gerns:"Comedy",stock:7,rating:3.5},
            {title:"Gone Girl",gerns:"Thriller",stock:7,rating:4.5},
        ]
    }
  render() {
    return (
      <div>Evnt12</div>
    )
  }
}

export default Evnt12