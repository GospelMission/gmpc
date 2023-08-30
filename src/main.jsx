import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom';
import './css/navbar.css'
import './css/discipleshipguide.css'
import './css/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter basename='/gmpc'>
      <App />
    </HashRouter>
  </React.StrictMode>
)
