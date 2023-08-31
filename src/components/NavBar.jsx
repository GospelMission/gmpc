import { useState } from 'react'
import { Route, Routes, useNavigate} from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import Home from './pages/Home'
import DiscipleshipGuide from "./pages/DiscipleshipGuide"

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate();

  function handleNav(link) {
      navigate(link)
  }

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
            <div onClick={() => {
              setIsOpen(false)
              handleNav('/')
              }}>Home
            </div>
            
            <div onClick={() => {
              setIsOpen(false)
              handleNav('/guide')
              }}>Discipleship Guide
            </div>
          </nav>
      </header>
    </div>

    <div className={isOpen ? 'mobile-nav-links' : 'hide'}>
        <nav>
            {/* <button className='nav-btn' onClick={handleClick}><FaTimes className='nav-icon'/></button> */}
            <div onClick={() => {
              setIsOpen(false)
              handleNav('/')
              }}>Home
            </div>
            
            <div onClick={() => {
              setIsOpen(false)
              handleNav('/guide')
              }}>Discipleship Guide
            </div>
        </nav>
    </div>
    <div className={isOpen ? 'hide' : ''}>
      <Routes>

          <Route exact path="/" element={<Home />} />
          <Route path="/guide" element={<DiscipleshipGuide />} />

      </Routes>
      </div>
  </>
  )
}

export default NavBar