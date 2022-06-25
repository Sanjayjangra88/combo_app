import React, { Component } from 'react'
import MessagingFolder from './messagingFolder'
import Message from './message'

export class messagingApp extends Component {
    state={
        data:[
            {
                id: 121,
                sent: false,
                from: "tweets@twitter.com",
                to: "jack@test.com",
                subject: "18 tweets from those you follow",
                text: "Go to your twitter page and see the tweets from those you follow.",
                folder: "Social",
                read: true,
            },
            {
              id: 141,
              sent: true,
              from: "jack@test.com",
              to: "mary@test.com",
              subject: "Bug 461 in Customer Flow" ,
              text:"When the checkbox is left unchecked and the option Important is selected in the dropdown,  clicking on Submit, shows no results.",
              folder: "Sent",
              read: false,
            },
            {
                id: 158,
                sent: false,
                from: "email@facebook.com",
                to: "jack@test.com",
                subject: "New post from William Jones",
                text: "William Jones has just uploaded a new post -How i loved the Avengers Endgame.",
                folder: "Social",
                read: true,
            },
            {
                id: 177,sent: true,
                from: "jack@test.com",
                to: "williams@test.com",
                subject: "Movie tomorrow",
                text: "Avengers Endgame is releasing tomorrow. Wanna see.",
                folder: "Sent",
                read: false,
                },
                {
                    id: 179,
                    sent: false,
                    from: "williams@test.com",
                    to: "jack@test.com",
                    subject: "Re: Movie tomorrow",
                    text:"The movie is supposed to be a blast. Lets do the 8:30 show. Want to havea quick bite before.",
                    folder: "Inbox",
                    read: false,
                    },
                    {
                    id: 194,
                    sent: false,
                    from: "retweet@twitter.com",
                    to: "jack@test.com",
                    subject: "Your tweet has been retweeted by Thomas",
                    text:"Your tweet on the MarvelSuperheroes and Avengers has been retweeted bt Thomas. It has now 41 retweets and 27likes.",
                    folder: "Social",
                    read: false,
                    },
                    { 
                        id: 204,
                        sent: true,
                        from: "mary@test.com",
                        to: "jack@test.com",
                        subject: "To do on Friday",
                        text:"Test the bugs on the employee form in Release 0.7.9 and fix them.",
                        folder: "Inbox",
                        read: false,
                    },
                    {
                        id: 255,
                        sent: true,
                        from: "mary@test.com",to: "jack@test.com",
                        subject: "Release 0.8.4 deployed",
                        text: "Release 0.8.4 has been deployed in the test environment.",
                        folder: "Inbox",
                        read: false,
                    },
                    {
                        id: 278,
                        sent: false,
                        from: "mary@test.com",
                        to: "jack@test.com",
                        subject: "Re: Bug 461 in Customer Flow",
                        text:"The bug has been fixed in the release 0.8.7. \nPlease test the issue and close it.\nCan you do it but tomorrow\nMary",
                        folder: "Inbox",
                        read: false,
                    },
                    {
                        id: 281,
                        sent: true,
                        from: "jack@test.com",
                        to: "mary@test.com",
                        subject: "Re: Re: Bug 461 in Customer Flow",
                        text: "Bug 461 has been closed.\nRegards,\nJack",
                        folder: "Sent",read: false,
                    },
                    {
                        id: 289,
                        sent: false,
                        from: "email@facebook.com",
                        to: "jack@test.com",
                        subject: "5 Shares, 2 Posts from your friends",
                        text:"Jack, while you were away, your friends are having fun on Facebook.\nDon't miss their posts.\nKeep up with yourfriends.",
                        folder: "Social",
                        read: true,},

        ],
        cng:true,
        second:[],
    }

    inbox=()=>{
        let s1={...this.state};
       let str= s1.data.filter((ele)=>ele.folder === "Inbox")
        s1.data=str;
        s1.cng=true;
        this.setState(s1)
     }
    social=()=>{
        let s1={...this.state};
      let str=  s1.data.filter((ele)=>ele.folder === "Social")
        s1.data=str;
        s1.cng=true;
        this.setState(s1)
       
    }
    sent=()=>{
        let s1={...this.state};
      let str=  s1.data.filter((ele)=>ele.folder === "Sent")
        s1.data=str;
        s1.cng=true;
        this.setState(s1)
        console.log('hy')
        
    }
    all=()=>{
        let s1={...this.state};
      let str=  s1.data.map((ele)=>ele)
        s1.data=str;
        s1.cng=true;
        this.setState(s1)
        
    }
    componentDidUpdate(prevProps,prevState){
        //  console.log("old",prevState.data)
        //  console.log("new",this.state.data)
        if(this.state.data !== prevState.data){
              this.state.data = prevState.data ; 
     }
    
         }

  changePage=(id)=>{
      let s1 ={...this.state};
      let str = s1.data.find((ele)=>ele.id === id)
      s1.second.splice(1,0,str)
      str.read = true;
      s1.cng = false;
      this.setState(s1)
    //   console.log(s1.second)

  } 
  back=()=>{
      let s1={...this.state};
      s1.second.pop();
      s1.cng = true;
      this.setState(s1);
  }
  remove=()=>{
      let s1={...this.state};
      
  }

         
  render() {
      const{data,cng,second}=this.state;
     
    return (
        <React.Fragment>
            <div className="slidebar">
        <ul>
           <li><a>Folders</a></li>
           <li><a onClick={()=>this.all()}>All</a></li>
           <li><a onClick={()=>this.inbox()}>Inbox</a></li>
           <li><a onClick={()=>this.social()}>Social</a></li>
           <li><a onClick={()=>this.sent()}>Sent</a></li>
           </ul>
          </div>
      {(cng===false)?
      <Message second={second}back={this.back}remove={this.remove}/>:
          <MessagingFolder data={data}page={this.changePage} />
      
      }
      </React.Fragment>
    )

  }

}

export default messagingApp