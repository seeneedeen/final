import './App.css';
import UserFB from './components/UserFB';
import FeedPost from './components/FeedPost';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [logedin,setLogedin] = useState(false)

  axios.interceptors.request.use(function(config){
    const token = sessionStorage.getItem('access_token')
    config.headers['Authorization'] = `Bearer ${token}`
    return config
  }, function(err){
    return Promise.reject(err)
  })

  return (
    <div className="mainApp">
      <UserFB logedin={setLogedin}/>
      {logedin ? <FeedPost/>:<></>}
    </div>
  );
}

export default App;
