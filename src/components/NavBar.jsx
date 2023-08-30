import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa"
import Home from './pages/Home'
import DiscipleshipGuide from "./pages/DiscipleshipGuide"

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  function handleClick() {
    if(!isOpen) {
      setIsOpen(prevValue => !prevValue)
    } else {
      setIsOpen(prevValue => !prevValue)
    }
  }

  return (
  <>
    <div className={isOpen ? 'hide' : ''}>
      <header>
          <span className='website-name'>Logo Here</span>
          <button className='nav-btn' onClick={handleClick}><FaBars className='nav-icon'/></button>
          <nav className={isOpen ? 'nav-links' : 'hide'}>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Start Here</Link>
              <Link to="/guide/" onClick={() => setIsMenuOpen(false)}>Discipleship Guide</Link>
          </nav>
      </header>
    </div>

    <div className={isOpen ? 'mobile-nav-links' : 'hide'}>
        <nav>
            <button className='nav-btn' onClick={handleClick}><FaTimes className='nav-icon'/></button>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Start Here</Link>
            <Link to="/guide/" onClick={() => setIsMenuOpen(false)}>Discipleship Guide</Link>
        </nav>
    </div>

      <Routes>
          <Route index path="/" element={<Home />}/>
          <Route path="/guide/" element={<DiscipleshipGuide />}/>
      </Routes>
   
  </>
  )
}

export default NavBar