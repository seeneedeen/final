import { useEffect, useState } from 'react'
import axios from 'axios'
import './NewPost.css'
function NewPost(props){
    const [msg,setMsg] = useState("")


    const inputTitle = (e)=>{
        setMsg(e.target.value)
    }

    const PostNewMSG = async (e)=>{
        e.preventDefault()
        let result = await axios.post('http://localhost:8080/api/create',{
            msg:msg
        })
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