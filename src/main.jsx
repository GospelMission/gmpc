import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom';
import './css/navbar.css'
import './css/discipleshipguide.css'
import './css/main.css'
import './css/home.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <HashRouter>
      <App />
    </HashRouter>
)
