import React, { Component } from "react";

class Evnt3 extends Component {
  state = {
    List1: ["Bob", "Charly", "Steave", "Maria", "Southy", "Candy"],
    List2: [],
  };
  list1Click = (index) => {
    let s1 = { ...this.state };
    let name = s1.List1.splice(index, 6);
    s1.List2.push(name);
    this.setState(s1);
  };
  list2Click = (index) => {
    let s1 = { ...this.state };
    let name = s1.List2.splice(index, 1);
    s1.List1.push(name);
    this.setState(s1);
  };
  render() {
    const { List1, List2 } = this.state;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-4 border">
            <h4>List1</h4>
            {List1.map((l1, index) => (
              <span onClick={() => this.list1Click(index)}>
                {l1}
                <br />
              </span>
            ))}
          </div>
          <div className="col-4 border">
            <h4>List2</h4>
            {List2.map((l2, index) => (
              <React.Fragment>
                {l2}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => this.list2Click(index)}
                >
                  X
                </button>
                <br />
              </React.Fragment>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Evnt3;
