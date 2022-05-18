import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
      type: 'dark',
      background: {
          default: "#222222",
          opacity: 0.8,
          background: 'radial-gradient(#d32f2f 0.5px, #000000 0.5px)',
          backgroundSize: '10px 10px',
      },
      primary: {
          main: '#222222',
      },
      secondary: {
          main: '#d4ebf2',
      },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <CssBaseline/>
          <App/>
      </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
