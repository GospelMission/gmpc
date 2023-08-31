import React from 'react'
import Win from './discipleshipguide/win/Win'
import Build from './discipleshipguide/build/Build'
import plusIcon from '../../images/plusIcon.png'
import minusIcon from '../../images/minusIcon.png'
import Send from './discipleshipguide/send/Send'

function DiscipleshipGuide() {
  return (
    <>  
    <div className='discipleship-wrapper'>  
        <h1 className='discipleship-guide'>DISCIPLESHIP GUIDE</h1>
        <Win plusIcon={plusIcon} minusIcon={minusIcon}/>
        <Build plusIcon={plusIcon} minusIcon={minusIcon}/>
        <Send />
    </div>

    </>
  )
}

export default DiscipleshipGuide