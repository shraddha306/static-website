// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Optional, if you have global styles
import App from './App'; // Ensure this is correct

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
