import React, { useState } from 'react'
import FollowingJesus from './expandables/FollowingJesus'
import FirstSteps from './expandables/FirstSteps'
import Discovering from './expandables/Discovering'

function Build({plusIcon, minusIcon}) {
    const [isOpen, setIsOpen] = useState([false, false, false])

    function handleClick(index) {
        setIsOpen(prevValues => {
        const tempArray = [...prevValues]
        tempArray[index] = !tempArray[index]
        return tempArray
        })
    }

  return (
    <div className='build-wrapper'>
        <div className='build-text'>
            <h1>2. BUILD</h1>
        </div>

        <div className='expandable-wrapper'>
            <FollowingJesus 
                isOpen={isOpen[0]} 
                handleClick={() => handleClick(0)}
                img={<img className='expandable-icon' src={isOpen[0] ? minusIcon : plusIcon}/>} 
            />
            <FirstSteps
                isOpen={isOpen[1]} 
                handleClick={() => handleClick(1)}
                img={<img className='expandable-icon' src={isOpen[1] ? minusIcon : plusIcon}/>} 
            />

            <Discovering
                isOpen={isOpen[2]} 
                handleClick={() => handleClick(2)}
                img={<img className='expandable-icon' src={isOpen[2] ? minusIcon : plusIcon}/>} 
            />

            
        </div>
    </div>
  )
}

export default Build