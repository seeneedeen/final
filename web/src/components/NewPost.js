import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './NewPost.css'
function NewPost(props){
    const [msg,setMsg] = useState("")


    const inputTitle = (e)=>{
        setMsg(e.target.value)
    }

    const PostNewMSG = (e)=>{
        e.preventDefault()
        const itemData = {
            id:uuidv4(),
            name:"title",
            msg:msg
        }
        props.newPostMsg(itemData)
        setMsg('')
    }

    return(
        <form onSubmit={PostNewMSG}>
            <div className="form-control">
                <label>Post Something</label>
                <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle} value={msg}/>
            </div>
            <div>
                <button type="submit" className="btn">เพิ่มข้อมูล</button>
        </div>
        </form>
    );
}

export default NewPost;