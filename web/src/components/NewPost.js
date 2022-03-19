import './NewPost.css'
function NewPost(){

    const inputTitle = (e)=>{
        console.log(e.target.value)
    }

    const PostNewMSG = (e)=>{
        e.preventDefault()
        console.log("post")
    }

    return(
        <form onSubmit={PostNewMSG}>
            <div className="form-control">
                <label>Post Something</label>
                <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle}/>
            </div>
            <div>
                <button type="submit" className="btn">เพิ่มข้อมูล</button>
        </div>
        </form>
    );
}

export default NewPost;