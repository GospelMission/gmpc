import React, { useState }from 'react'
import NavBar from './components/NavBar'
import Login from './components/pages/Login'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <NavBar />
    </>

  )
}

export default App