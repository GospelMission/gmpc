import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons"
import { faCircle, faCircleDot } from "@fortawesome/free-regular-svg-icons";

import { Navigation, Pagination, EffectFade} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade';

function ImageSlider({ sliders }) {
    const navigate = useNavigate()
  return (
    <>

        <Swiper 
            style={{

                "--swiper-pagination-bullet-inactive-color": "#FFFFFF",
                "--swiper-pagination-bullet-inactive-opacity": "1",
                "--swiper-pagination-bullet-size": "11px",
                }}
            modules={[EffectFade, Navigation, Pagination]}
            effect={'fade'}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{
                dynamicBullets: true,
            }}
            className="mySwiper"
        >
        {sliders.map((slider) => {
            const sliderStyles = {
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slider.url})`,
            }
            return(
                <SwiperSlide key={Math.random()}>
                    <div className='slider-image animation' style={sliderStyles}>
                        <div className="slider-content">
                            <div className="slider-title animation">
                                <h1>{slider.title}</h1>
                            </div>
                            <button className='slider-view-btn' onClick={() => navigate(slider.path)}>View {slider.title}</button>
                        </div>
                    </div>
                </SwiperSlide>
            )
        })}
        </Swiper>
    </>

  )
}

export default ImageSlider

    // const [currentIndex, setCurrentIndex] = useState(0)

    // function goToPrevious() {
    //     if(currentIndex > 0 ) {
    //         setCurrentIndex(prevIndex => prevIndex - 1)
    //     } 
    // }

    // function goToNext() {
    //     if(currentIndex < sliders.length - 1) {
    //         setCurrentIndex(prevIndex => prevIndex + 1)
    //     } 
    // }

    // const carousels = sliders.map((slider, index)=> {
    //     function handleClick() {
    //         setCurrentIndex(index)
    //     }

    //     return(
    //             <FontAwesomeIcon key={index}
    //                 onClick={() => handleClick()} 
    //                 icon={currentIndex == index ? faCircleDot : faCircle} 
    //                 size='sm' 
    //                 fade={currentIndex == index ? true : false}
    //             />     
    //     )
    // })

    // const navigateToPath = () => {
    //     navigate(sliders[currentIndex].path);
    // };

        {/* 
        <div className='slider-wrapper'>
            <div className={`btn-slider-arrow btn-slider-arrow-left ${currentIndex > 0 ? 'visible' : ''}`} onClick={(e) => {e.stopPropagation(); goToPrevious()}}>
                <FontAwesomeIcon className="icon-slider-arrow icon-slider-arrow-left" icon={faAngleLeft} fade/>
            </div>

            <div className='slider-image animation' style={sliderStyles}>

                <div className="slider-content">
                    <div key={Math.random()}  className="slider-title animation">
                        <h1>{sliders[currentIndex].title}</h1>
                    </div>
                    <button className='slider-view-btn' onClick={navigateToPath}>View {sliders[currentIndex].title}</button>
                </div>
                <div className='carousel'>
                    {carousels}
                </div>
            </div>

            <div className={`btn-slider-arrow btn-slider-arrow-right ${currentIndex < sliders.length - 1 ? 'visible' : ''}`} onClick={(e) => {e.stopPropagation(); goToNext()}}>
                        <FontAwesomeIcon className="icon-slider-arrow icon-slider-arrow-right" icon={faAngleRight} fade/>
            </div>           
        </div>
        */}