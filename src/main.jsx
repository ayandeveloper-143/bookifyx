import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Api from "./lib/api";
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ThemeProvider } from './components/ThemeProvider.jsx';

async function loadCsrf() {
  await Api.get("/csrf-token");
}

loadCsrf();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <App />
      </GoogleOAuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
