import Post from "./Post";
import React,{useState} from "react";
import NewPost from './NewPost';

function FeedPost(){
    const [post,setPost] = useState([])
    const newPostMsg = (newItem)=>{
        setPost((prevItem)=>{
          return [newItem,...prevItem]
        })
    }
    return(
        <div>
            <NewPost newPostMsg={newPostMsg}/>
            <ul className="item-list">
            {post.map((element)=>{
                return <Post {...element} key={element.id}/>
            })}
            </ul>
        </div>
    );
}

export default FeedPost;