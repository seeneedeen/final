import axios from 'axios'
import React,{useState} from 'react';
import FacebookLogin from "react-facebook-login"


function UserFB(){
  let loginBtn,showProfile;
  
  const [profile,setPicfile] = useState({
    name : "",
    picture : "",
    status : false
  })

  const responseFacebook = async (response) => {
    if(response.accessToken){
      let result = await axios.post('http://localhost:8080/login', {
        token: response.accessToken
      })
      sessionStorage.setItem('access_token', result.data.access_token)
      setPicfile({
        name:result.data.result.name,
        picture:result.data.result.picture.data.url,
        status:true
      })
    }
  }

  if(profile.status){
    loginBtn = (<></>)
    showProfile = (
      <>
        <h1>{profile.name}</h1>
        <img src={profile.picture} alt="Logo" />
      </>
    )
  }else{
    loginBtn = (
      <FacebookLogin
        appId = "1075683823003347"
        autoLoad = {true}
        callback = {responseFacebook}
      />
    )
    showProfile = (
      <>
        <h1>Please Login</h1>
      </>
    )
  }
  return(
    <>
      <div>{loginBtn}</div>
      <div>{showProfile}</div>
    </>
  )

}

export default UserFB;