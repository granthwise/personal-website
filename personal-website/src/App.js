import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';

function App()
  {
    return (
        <Router>
          <Routes>
            <Route exact path="/Home" element={<Home />}/>
            <Route path="*" element={<Navigate to="/Home"/>} />
          </Routes>
        </Router>
    );
  }

export default App;
