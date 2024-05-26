import React from 'react';
import ReactDOM from 'react-dom/client';
import MainApp from './App.jsx';
import { AuthProvider } from './component/auth/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <MainApp />
  </AuthProvider>
);
