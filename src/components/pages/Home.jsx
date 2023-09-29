import React from 'react'
import ImageSlider from './home/ImageSlider'
import DGGuideImg from '../../images/guideImg.jpg'
import MissionVisionImg from '../../images/missionvisionImg.jpg'
import NotesImg from '../../images/notesImg.jpg'

function Home() {
  const sliders = [
    {title:"Discipleship Guide", path: "/guide", url: DGGuideImg },
    {title:"Mission and Vision", path: "/commitments", url: MissionVisionImg},
    {title:"Notes Application", path: "/notesapp", url: NotesImg},
  ]


  return (
    <>
      <div className='home-wrapper'>
        <ImageSlider sliders={sliders} />
      </div>
    </>


  )
}

export default Home