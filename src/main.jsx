import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, HashRouter } from 'react-router-dom';
import './css/navbar.css'
import './css/discipleshipguide.css'
import './css/main.css'
import './css/home.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter basename='/gmpc'>
      <App />
    </BrowserRouter>
)
