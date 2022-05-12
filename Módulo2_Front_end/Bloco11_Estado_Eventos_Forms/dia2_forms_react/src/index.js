import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import AppFix from './fixation/AppFix';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <AppFix /> */}
  </React.StrictMode>
);
