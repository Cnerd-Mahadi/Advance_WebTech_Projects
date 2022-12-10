import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Route from './component/Route';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Route />
    <App />
  </StrictMode>
);
