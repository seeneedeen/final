import './App.css';
import UserFB from './components/UserFB';
import FeedPost from './components/FeedPost';
import { useState } from 'react';
import { BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

function App() {
  const [logedin,setLogedin] = useState(false)

  return (
    <div className="mainApp">
      <UserFB logedin={setLogedin}/>
      {logedin ? <FeedPost/>:<></>}
    </div>
  );
}

export default App;
