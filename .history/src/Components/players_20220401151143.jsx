import React, { Component } from 'react'

 class players extends Component 
{
    state ={
        players:[
            {name :"Jack",answered: 10,correct:8},
            {name :"Steve",answered: 8,correct:7},
            {name :"Williom",answered: 12,correct:9},
            {name :"Kathy",answered: 11,correct:10},
            {name :"Eward",answered: 9,correct:6},
            {name :"Marry",answered: 13,correct:8},
        ],
        correctanswere : 2,
        incorrectanswere :-1

    }
  render() {
     const {players,correctanswere,incorrectanswere} = this.state;
    return (
      <div className="container">
          {players.map((p1)=>{
              let {name,answered,correct} = p1
              return(
                  <div className="row">
                      <div className="col-3 border">{name}</div>
                      <div className="col-3 border">{answered}</div>
                      <div className="col-3 border">{correct}</div>
                      <div className="col-3 border">{correct*correctanswere+(answered-correct)*incorrectanswere}</div>
                      

                  </div>
              )
          })}
      </div>
    )
  }
}

export default players