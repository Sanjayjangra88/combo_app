import React, { Component } from 'react'

class Evnt3 extends Component {
    state ={
        List1 :["Bob","Charly","Steave","Maria","Southy","Candy"],
        List2 : [],
    }
  render() {
      const {List1,List2} =this.state;
    return (
      <React.Fragment>
          <div className="row">
              <div className="col-4">
                  {List1.map((l1)=>(
                      <React.Fragment>
                          {l1}<br/>
                      </React.Fragment>
                  ))}
              </div>
          </div>

      </React.Fragment>
    )
  }
}

export default Evnt3