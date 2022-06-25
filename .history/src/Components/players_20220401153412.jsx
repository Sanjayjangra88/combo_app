import React, { Component } from "react";

class players extends Component {
  state = {
    players: [
      { name: "Jack", answered: 10, correct: 8 },
      { name: "Steve", answered: 8, correct: 7 },
      { name: "Williom", answered: 12, correct: 9 },
      { name: "Kathy", answered: 11, correct: 10 },
      { name: "Eward", answered: 9, correct: 6 },
      { name: "Marry", answered: 13, correct: 8 },
    ],
    correctanswere: 2,
    incorrectanswere: -1,
  };
  sortPlayers =(p1,p2)=>{
      const {correctanswere, incorrectanswere } = this.state;
    let x1= p1.correct * correctanswere +(p1.answered - p1.correct) * incorrectanswere;
    let x2= p2.correct * correctanswere +(p2.answered - p2.correct) * incorrectanswere;
    return x2-x1;
  }
  render() {
    const { players, correctanswere, incorrectanswere } = this.state;
    let players1 = [...players];
    players1.sort(this.sortPlayers);
    return (
      <div className="container">
          <div className="row bg-success text-white">
              <div className="col-3 border">Name</div>
              <div className="col-3 border text-center">Answere</div>
              <div className="col-3 border text-center">Correct</div>
              <div className="col-3 border text-center">Score</div>
            </div>
        {players.map((p1) => {
          let { name, answered, correct } = p1;
          return (
            <div className="row">
              <div className="col-3 border">{name}</div>
              <div className="col-3 border text-center">{answered}</div>
              <div className="col-3 border text-center">{correct}</div>
              <div className="col-3 border text-center">
                {correct * correctanswere +
                  (answered - correct) * incorrectanswere}
              </div>
            </div>
          );
        })}
        <div className="row bg-light">
            <div className="col-6 border">
                <h4 className="textcolor-primary">LeaderBoard</h4>
                1.{players1[0].name}<br/>
                2.{players1[1].name}<br/>
                3.{players1[2].name}<br/>
            </div>
        </div>
      </div>
    );
  }
}

export default players;
