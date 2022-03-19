import Post from "./Post";
import React,{useState} from "react";
import NewPost from './NewPost';

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
        name: "sdasd",
        msg: ";skldf;sdjf;wsdfj;s"
    }])
    const newPostMsg = (newItem)=>{
        setPost((prevItem)=>{
          return [newItem,...prevItem]
        })
    }
    return(
        <div>
            <NewPost setPost={newPostMsg}/>
            <ul className="item-list">
            {post.map((element)=>{
                return <Post {...element} key={element.id}/>
            })}
            </ul>
        </div>
    );
}

export default FeedPost;