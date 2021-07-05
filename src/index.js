import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ScrollTop from 'components/Scroll/ScrollTop'; 
import { ModeProvider } from 'contexts/mode';

ReactDOM.render(
  <BrowserRouter>
    <ScrollTop />
      <ModeProvider>
        <App />
      </ModeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
