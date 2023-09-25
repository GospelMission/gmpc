import React from 'react'
import { useNavigate } from 'react-router-dom';

function NotesApp() {
    const navigate = useNavigate();

    function handleClick(link) {
        navigate(link)
    }
  return (
    <div onClick={() => handleClick('/login')} className='section-wrapper section-bg-color'>
        <h2>Notes Application</h2>
    </div>
  )
}

export default NotesApp