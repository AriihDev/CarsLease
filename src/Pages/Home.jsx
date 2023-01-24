import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "../Components/Layout/Slider.css"
import img1 from "../Assets/1.jpg"
import img2 from "../Assets/2.jpg"
import img3 from "../Assets/3.jpg"

function Home() {

  return (
    <Carousel autoPlay interval={2000} infiniteLoop showIndicators={false} showStatus={false} >
            <div className='overlay'>
              <img src={img1}/>
              <h2 className='overlay_title'> Luxury Cars</h2>
            </div>

            <div className='overlay'>
              <img src={img2}/>
              <h2 className='overlay_title'> Leasing Cars</h2>
            </div>

            <div className='overlay'>
              <img src={img3}/>
              <h2 className='overlay_title'> Most Popular</h2>
            </div>

        </Carousel>
  )
}

export default Home