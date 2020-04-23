import React from 'react';
import { Zoom } from 'react-slideshow-image';
import './Slides.css';
import monstera1 from "./monstera/1.jpg"
import monstera2 from "./monstera/2.jpg"
import monstera3 from "./monstera/3.jpg"
import monstera4 from "./monstera/4.jpg"
import monstera5 from "./monstera/5.2.jpg"

import monstera7 from "./monstera/7.jpg"
import monstera8 from "./monstera/8.jpg"
import monstera9 from "./monstera/9.jpg"
import monstera10 from "./monstera/10.jpg"


const monsteras = [
  monstera1,
  monstera2,
  monstera3,
  monstera4,
  monstera5,
  monstera7,
  monstera8,
  monstera9,
  monstera10
];

const zoomOutProperties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
}

const Slide1 = () => {
    return (
      <div className="slide-container">
        <Zoom {...zoomOutProperties} >
          {
            monsteras.map((each, index) => <img key={index} src={each} alt="monstera"/>)
          }
        </Zoom>
      </div>
    )
}

export default Slide1;
