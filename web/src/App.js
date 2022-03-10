import axios from 'axios';
import './App.css';

function App() {

  async function callAPI(){
    let api = await axios.post("http://localhost:8080",{
      "msg" : "hello"
    })
    console.log(api.data)

  }

  return (
    <div className="App">
      <h1>THIS IS CLIENT TO CALL APT</h1>
      <button onClick={callAPI}>Call APT</button>
    </div>
  );
}

export default App;
