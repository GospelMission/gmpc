import React from 'react'
import { useNavigate } from 'react-router-dom';

function DGGuideSection() {
    const navigate = useNavigate();

    function handleClick(link) {
        navigate(link)
    }

  return (
    <div onClick={() => handleClick('/guide')} className='section-wrapper section-bg-color'>
        <h2>Discipleship Guide</h2>
    </div>
  )
}

export default DGGuideSection