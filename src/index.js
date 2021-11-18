import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/scss/main.scss";
import App from './app';
import AuthProvider from './contexts/auth';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
