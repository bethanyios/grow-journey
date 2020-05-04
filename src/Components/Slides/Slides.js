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

import fern1 from "./fern/1.jpg"
import fern2 from "./fern/2.jpg"
import fern3 from "./fern/3.jpg"
import fern4 from "./fern/4.jpg"
import fern5 from "./fern/5.jpg"
import fern6 from "./fern/6.jpg"
import fern7 from "./fern/7.jpg"
import fern8 from "./fern/8.jpg"
import fern10 from "./fern/10.jpg"
import fern11 from "./fern/11.jpg"
import fern12 from "./fern/12.jpg"
import fern13 from "./fern/13.jpg"
import fern14 from "./fern/14.jpg"
import fern15 from "./fern/15.jpg"

import japhro1 from "./japhrolepis/1.jpg"
import japhro2 from "./japhrolepis/2.jpg"
import japhro3 from "./japhrolepis/3.jpg"
import japhro4 from "./japhrolepis/4.jpg"
import japhro5 from "./japhrolepis/5.jpg"
import japhro6 from "./japhrolepis/6.jpg"
import japhro7 from "./japhrolepis/7.jpg"
import japhro8 from "./japhrolepis/8.jpg"

import cala1 from "./cala/1.jpg"
import cala2 from "./cala/2.jpg"
import cala3 from "./cala/3.jpg"
import cala4 from "./cala/4.jpg"
import cala5 from "./cala/5.jpg"
import cala6 from "./cala/6.jpg"



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

const ferns = [
  fern1,
  fern2,
  fern3,
  fern4,
  fern5,
  fern6,
  fern7,
  fern8,

  fern10,
  fern11,
  fern12,
  fern13,
  fern14,
  fern15
];

const japhrolepis = [
  japhro1,
  japhro2,
  japhro3,
  japhro4,
  japhro5,
  japhro6,
  japhro7,
  japhro8
];

const calas = [
  cala1,
  cala2,
  cala3,
  cala4,
  cala5,
  cala6
];

const zoomOutProperties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
}

const Slideshow = () => {
    return (
      <section className="slide-container">
      <section className="plant-name">
      Monstera Adonasii
      </section>
        <Zoom {...zoomOutProperties} >
          {
            monsteras.map((each, index) => <img key={index} src={each} alt="monstera"/>)
          }

        </Zoom>
        <section className="plant-name">
        Asparagus Fern
        </section>
          <Zoom {...zoomOutProperties} >
        {
          ferns.map((each, index) => <img key={index} src={each} alt="fern"/>)
        }
        </Zoom>
        <section className="japh">
        Aeschynanthus Japhrolepis
        </section>
          <Zoom {...zoomOutProperties} >
        {
          japhrolepis.map((each, index) => <img key={index} src={each} alt="japhrolepis"/>)
        }
        </Zoom>
        <section className="plant-name">
        Calathea Medallion
        </section>
          <Zoom {...zoomOutProperties} >
        {
          calas.map((each, index) => <img key={index} src={each} alt="calathea"/>)
        }
        </Zoom>
      </section>
    )
}

export default Slideshow;
