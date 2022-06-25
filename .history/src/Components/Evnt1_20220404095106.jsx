import React, { Component } from 'react'

 class Evnt1 extends Component {
     state={
         text :"No Button Clicked",
         count :0
     }
    // btnClick =()=>{
    //      let s1 = {...this.state};
    //      s1.text ="Welcome Sir";
    //      this.setState(s1);
    //  }
    //  btnClick123 =()=>{
    //     let s1 = {...this.state};
    //     s1.text =123;
    //     this.setState(s1);
    // }
    onClick =(str)=>{
        let s1 ={...this.state}
        s1.text = str;
        s1.count =s1.count+1;
        this.setState(s1);

    }
  render() {
    return (
     <React.Fragment>
         <button className="btn btn-primary me-2 "onClick={()=>this.onClick("Welcome Sir")}>ABC</button>
         <button className="btn btn-primary " onClick={()=>this.onClick(123)}>ABC</button><br/>
          text:{text}<br/>
          count:{count}
     </React.Fragment>
    )
  }
}

export default Evnt1