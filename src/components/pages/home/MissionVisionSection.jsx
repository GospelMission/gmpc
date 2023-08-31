import React from 'react'
import { useNavigate } from 'react-router-dom';

function MissionVisionSection() {
    const navigate = useNavigate();

    function handleClick(link) {
        navigate(link)
    }

  return (
    <div onClick={() => handleClick('/commitments')} className='section-wrapper section-bg-color'>
        <h2>Mission and Vision</h2>
    </div>
  )
}

export default MissionVisionSection