import axios from 'axios'
import React,{useState} from 'react';
import FacebookLogin from "react-facebook-login"
import config from '../config';
import './UserFB.css';


function UserFB(props){
  let loginBtn,showProfile;
  const setLogedin = props.logedin
  
  const [profile,setPicfile] = useState({
    name : "",
    picture : "",
    status : false
  })

  const responseFacebook = async (response) => {
    if(response.accessToken){
      console.log(response.accessToken)
      let result = await axios.post(`${config.loginUrlPrefix}`, {
        token: response.accessToken
      })
      sessionStorage.setItem('access_token', result.data.access_token)
      setPicfile({
        name:result.data.result.name,
        picture:result.data.result.picture.data.url,
        status:true
      })
      setLogedin(true)
    }
  }

  if(profile.status){
    loginBtn = (<></>)
    showProfile = (
      <div className='profile'>
        <div className="nameFB">
          <h1>{profile.name}</h1>
        </div>
        <div className="profileImg">
          <img src={profile.picture} alt="Logo"/>
        </div>
      </div>
    )
  }else{
    loginBtn = (
      <FacebookLogin
        appId = "1075683823003347"
        autoLoad = {true}
        cssClass= "btnFacebook"
        callback = {responseFacebook}
      />
    )
    showProfile = (<></>)
  }

  return(
    <div className="facebook-user">
      <div>{loginBtn}</div>
      <div>{showProfile}</div>
    </div>
  )

}

export default UserFB;