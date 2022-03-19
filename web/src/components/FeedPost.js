import Post from "./Post";
import React,{useState} from "react";

function FeedPost(){
    const [post,setPost] = useState([{
        id: 1,
        name: "sitthisak",
        msg: "skajflksdjfl;skdjflsdfkj"
    },
    {
        id: 2,
        name: "ksdfjsd",
        msg: ";skldf;sdjf;wsdfj;s"
    },{
        id: 3,
        name: "ksdfjsd",
        msg: ";skldf;sdjf;wsdfj;s"
    }])

    return(
        <ul className="item-list">
          {post.map((element)=>{
              return <Post {...element} key={element.id}/>
          })}
        </ul>
    );
}

export default FeedPost;