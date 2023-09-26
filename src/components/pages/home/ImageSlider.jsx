import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function ImageSlider({ sliders }) {
    const navigate = useNavigate()
    const [currentIndex, setCurrentIndex] = useState(0)

    function goToPrevious() {
        if(currentIndex > 0 ) {
            setCurrentIndex(prevIndex => prevIndex - 1)
        } 
    }

    function goToNext() {
        if(currentIndex < sliders.length - 1) {
            setCurrentIndex(prevIndex => prevIndex + 1)
        } 
    }

    const navigateToPath = () => {
        navigate(sliders[currentIndex].path);
      };

      const sliderStyles = {
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${sliders[currentIndex].url})`,
      }

  return (
    <>
    <div className='slider-wrapper'>
        <div className={`btn-slider-arrow slider-left-arrow ${currentIndex > 0 ? 'visible' : ''}`} onClick={(e) => {e.stopPropagation(); goToPrevious()}}>
            <FontAwesomeIcon className="icon-slider-arrow" icon={faAngleLeft} fade/>
        </div>

        <div key={Math.random()} className='slider-image' style={sliderStyles}>

            <div className="slider-content">
                <div className="slider-title animation">
                    <h1>{sliders[currentIndex].title}</h1>
                </div>
                <button className='slider-view-btn' onClick={navigateToPath}>View {sliders[currentIndex].title}</button>
            </div>
        </div>

        <div className={`btn-slider-arrow slider-right-arrow ${currentIndex < sliders.length - 1 ? 'visible' : ''}`} onClick={(e) => {e.stopPropagation(); goToNext()}}>
                    <FontAwesomeIcon className="icon-slider-arrow" icon={faAngleRight} fade/>
        </div>
    </div>



    </>

  )
}

export default ImageSlider