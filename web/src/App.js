import axios from 'axios';
import FacebookLogin from "react-facebook-login"
import './App.css';

function App() {

  const responseFacebook = async (response) => {
    if(response.accessToken)
    {
      let result = await axios.post('http://localhost:8080/login', {
        token: response.accessToken
      })
      sessionStorage.setItem('access_token', result.data.access_token)
    }
  }
  

  return (
    <div className="App">
      <FacebookLogin
        appId = "1075683823003347"
        autoLoad = {true}
        callback = {responseFacebook}
      />

    </div>
  );
}

export default App;
