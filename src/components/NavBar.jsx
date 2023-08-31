import { useState } from 'react'
import { Link, Route, Routes } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import Home from './pages/Home'
import DiscipleshipGuide from "./pages/DiscipleshipGuide"
import MissionVision from './pages/MissionVision'

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
          <span className='website-name'>Gospel Mission Presbyterian Church</span>
          <button className='nav-btn' onClick={handleClick}><FaBars className='nav-icon'/></button>
          <nav className={isOpen ? 'nav-links' : 'hide'}>
              <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/guide" onClick={() => setIsOpen(false)}>Discipleship Guide</Link>
              <Link to="/commitments" onClick={() => setIsOpen(false)}>Mission and Vision</Link>
          </nav>
      </header>
    </div>

    <div className={isOpen ? 'mobile-nav-links' : 'hide'}>
        <nav>
            {/* <button className='nav-btn' onClick={handleClick}><FaTimes className='nav-icon'/></button> */}
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/guide" onClick={() => setIsOpen(false)}>Discipleship Guide</Link>
            <Link to="/commitments" onClick={() => setIsOpen(false)}>Mission and Vision</Link>
        </nav>
    </div>
    <div className={isOpen ? 'hide' : ''}>
      <Routes>

          <Route exact path="/" element={<Home />} />
          <Route path="/guide" element={<DiscipleshipGuide />} />
          <Route path="/commitments" element={<MissionVision />} />
      </Routes>
      </div>
  </>
  )
}

export default NavBar