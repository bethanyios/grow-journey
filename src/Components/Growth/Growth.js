import React from 'react';
import Slideshow from '../Slides/Slides.js'
import Back from '../Buttons/Back.js';
import {
  Link
} from "react-router-dom";

import './Growth.css'

const Growth = () => {
  return (
    <>
    <Link to="/" className="back"><Back /></Link>
    <Slideshow />
    </>
  )
}

export default Growth;
