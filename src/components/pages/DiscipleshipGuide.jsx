import React from 'react'
import Win from './discipleshipguide/win/Win'
import Build from './discipleshipguide/build/Build'
import plusIcon from '../../images/plusIcon.png'
import minusIcon from '../../images/minusIcon.png'

function DiscipleshipGuide() {
  return (
    <>
        <h1 className='discipleship-guide'>DISCIPLESHIP GUIDE</h1>
        <Win plusIcon={plusIcon} minusIcon={minusIcon}/>
        <Build plusIcon={plusIcon} minusIcon={minusIcon}/>
    </>
  )
}

export default DiscipleshipGuide