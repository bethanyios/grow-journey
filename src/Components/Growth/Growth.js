import React from 'react';
import Slide1 from '../Slides/Slides.js'
import Back from '../Buttons/Back.js';
import {
  Link
} from "react-router-dom";

import './Growth.css'

const Growth = () => {
  return (
    <>
    <Link to="/" className="back"><Back /></Link>
    <Slide1 />
    </>
  )
}

export default Growth;
