import { useState, useEffect } from 'react'
import { Link, Route, Routes } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import Home from './pages/Home'
import DiscipleshipGuide from "./pages/DiscipleshipGuide"
import MissionVision from './pages/MissionVision'
import Register from './pages/Register'
import Login from './pages/Login'
import NotesApplication from './pages/NotesApplication'
import WebsiteLogo from '../images/gmpc-logo.png'
import BurgerBtn from '../images/burger-menu.png'

function NavBar() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const isLoggedIn = !!sessionStorage.getItem('isLoggedIn');
  
  function handleLoginSuccess() {
    sessionStorage.setItem('isLoggedIn', 'true');
    navigate('/notesapp');
  }

  function handleLogout() {
    sessionStorage.clear();
    navigate('/');
  };

  function handleClick() {
    if(!isOpen) {
      setIsOpen(prevValue => !prevValue)
    } else {
      setIsOpen(prevValue => !prevValue)
    }
  }


  return (
  <>
    <div className={isOpen ? 'hide' : 'navbar-wrapper'}>
      <header>
          <img src={WebsiteLogo} className='website-logo' onClick={() => navigate("/")}/>

            <button className='start-membership-btn' onClick={() => navigate("/register")}>Start Membership</button>
            <img src={BurgerBtn} onClick={handleClick} className='nav-icon'/>


          {/* <button className='nav-btn' onClick={handleClick}><FaBars className='nav-icon'/></button> */}
          <nav className={isOpen ? 'nav-links' : 'hide'}>
              <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/guide" onClick={() => setIsOpen(false)}>Discipleship Guide</Link>
              <Link to="/commitments" onClick={() => setIsOpen(false)}>Mission and Vision</Link>
              <Link to="/notesapp" onClick={() => setIsOpen(false)}>Notes Application</Link>
              {isLoggedIn ? <Link to="/" onClick={() => {setIsOpen(false); handleLogout()}}>Logout</Link> : ""}
          </nav>

      </header>
    </div>

    <div className={isOpen ? 'mobile-nav-links animation' : 'hide'}>
        <nav>
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/guide" onClick={() => setIsOpen(false)}>Discipleship Guide</Link>
            <Link to="/commitments" onClick={() => setIsOpen(false)}>Mission and Vision</Link>
            <Link to="/notesapp" onClick={() => setIsOpen(false)}>Notes Application</Link>
            {isLoggedIn ? <Link to="/" onClick={() => {setIsOpen(false); handleLogout()}}>Logout</Link> : ""}
        </nav>
    </div>
    <div className={isOpen ? 'hide' : ''}>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login handleLoginSuccess={handleLoginSuccess}/>} />
          <Route path="/register" element={<Register handleLoginSuccess={handleLoginSuccess}/>} />
          <Route path="/guide" element={<DiscipleshipGuide />} />
          <Route path="/commitments" element={<MissionVision />} />
          <Route path="/notesapp" element={<NotesApplication/>} />
      </Routes>
      </div>
  </>
  )
}

export default NavBar