import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import Context1Provider from './context/context1.jsx'; // use default import

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Context1Provider>
      <App />
    </Context1Provider>
  </BrowserRouter>
);
