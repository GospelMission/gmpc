import { useState } from 'react'
import OneVerse from './expandables/OneVerse'
import Tract from './expandables/Tract'
import OneToOne from './expandables/OneToOne'
import StoryOfGod from './expandables/StoryOfGod'


function Win({minusIcon, plusIcon}) {
  const [isOpen, setIsOpen] = useState([false, false, false, false])

  function handleClick(index) {
    setIsOpen(prevValues => {
      const tempArray = [...prevValues]
      tempArray[index] = !tempArray[index]
      return tempArray
    })
  }

  return (
    <>
    <div className='win-wrapper'>
        <div className='win-text'>
            <h1>1. WIN</h1>
            <p>Introduce to the Unbelievers the basic content of the Gospel</p>
        </div>

        <div className='expandable-wrapper'>
          <OneVerse 
            isOpen={isOpen[0]} 
            handleClick={() => handleClick(0)}
            img={<img className='expandable-icon' src={isOpen[0] ? minusIcon : plusIcon}/>} 
          />

          <Tract 
            isOpen={isOpen[1]} 
            handleClick={() => handleClick(1)}
            img={<img className='expandable-icon' src={isOpen[1] ? minusIcon : plusIcon}/>} 
          />

          <OneToOne 
            isOpen={isOpen[2]} 
            handleClick={() => handleClick(2)}
            img={<img className='expandable-icon' src={isOpen[2] ? minusIcon : plusIcon}/>} 
          />

          <StoryOfGod
            isOpen={isOpen[3]} 
            handleClick={() => handleClick(3)}
            img={<img className='expandable-icon' src={isOpen[3] ? minusIcon : plusIcon}/>} 
          />
        </div>


    </div>

    </>
  )
}

export default Win