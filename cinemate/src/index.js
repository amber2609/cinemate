import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Routes } from 'react-router-dom';
import { ScrollToTop } from './components';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes>
      <ScrollToTop />
      <App />
    </Routes>
  </React.StrictMode>
);
