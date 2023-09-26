import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom';
import './css/navbar.css'
import './css/discipleshipguide.css'
import './css/main.css'
import './css/home.css'
import './css/register.css'
import './css/login.css'
import './css/notecard.css'
import './css/slider.css'
import './css/missionvision.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <HashRouter>
      <App />
    </HashRouter>
)
