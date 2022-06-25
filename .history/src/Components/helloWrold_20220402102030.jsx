import React, {Component} from 'react';
class helloWrold extends Component {
    state ={
        students :[
            {name :"Willim",maths :34,english:36},
            {name :"George",maths :24,english:31},
            {name :"kethrine",maths :36,english:41},
            {name :"Shopiea",maths :45,english:37},
            {name :"Tomy",maths :22,english:19}
        ]
    }
    getColor = (m1,m2) => (m1+m2>=60 ? "bg-success" : "bg-danger")
 render() {
     let {students}=this.state;
     const st1 = students.filter((name)=>name.maths+name.english>=50);
   return (
     (<div className="container">
          <div className="row border bg-primary text-white">
           <div className="col-6 border">Name</div>
           <div className="col-3 border text-center">Math</div>
           <div className="col-3 border text-center">English</div>
           </div>
         {st1.map((st)=>{
         let {name,maths,english} = st;
         return(
         <div className={"row border " + this.getColor(maths,english)}>
           <div className="col-6 border">{name}</div>
           <div className="col-3 border text-center">{maths}</div>
           <div className="col-3 border text-center">{english}</div>
           </div>
         );
         })}
           </div>)
   );
 }
}

  
export default helloWrold;