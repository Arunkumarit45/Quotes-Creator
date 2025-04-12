import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation';
import { useEffect, useState } from 'react';
import Login from './Components/Login';
import Showlist from './Components/Showlist';
import CreateQuote from './Components/CreateQuote';

function App() {
  const [token, setToken] = useState(sessionStorage.getItem('token')|| null );

  useEffect(() => {
    setToken(sessionStorage.getItem('token'));
  }, []);

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Login setToken={setToken}/>} />
          <Route path="/quotes" element={token ? <Showlist /> : <Login setToken={setToken}/>} />
          <Route path="/create-quote" element={token ? <CreateQuote /> : <Login setToken={setToken}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
