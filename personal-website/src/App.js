import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
function App()
  {
    const themeDark = createTheme({
      palette: {
        background: {
          default: "#222222"
        },
        text: {
          primary: "#ffffff"
        }
      }
    });
    return (
      <ThemeProvider theme={themeDark}>
        <Router>
          <Routes>
            <Route exact path="/Home" element={<Home />}/>
            <Route path="*" element={<Navigate to="/Home"/>} />
          </Routes>
        </Router>
      </ThemeProvider>
    );
  }

export default App;
