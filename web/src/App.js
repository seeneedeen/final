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

  const callInfoAPI = async () => {
    let result = await axios.get('http://localhost:8080/verify')
    console.log(result.data)
  }
  
    
  return (
    <div className="mainApp">
      <UserFB logedin={setLogedin}/>
      {logedin ? <FeedPost/>:<></>}
      <div>
        <button onClick={callInfoAPI}>TEST verifly</button>
      </div>
    </div>
  );
}

export default App;
