import React from 'react';
import Back from '../Buttons/Back.js';
import {ReactComponent as Light} from '../../assets/light.svg'
import {ReactComponent as Watering} from '../../assets/watering.svg'
import {ReactComponent as Pruning} from '../../assets/pruning.svg'
import {ReactComponent as Temp} from '../../assets/temp.svg'
import {ReactComponent as Mist} from '../../assets/mist.svg'
import {
  Link
} from "react-router-dom";

import './Care.css';

const Care = () => {
  return (
    <>
        <Link to="/" className="back"><Back /></Link>
        <section className="plantcare">
        Asparagus Fern
        <div className="watering">
<Watering/>
Regular watering.
When top surface of soil is dry, keep moist.
</div>
<div className="light">
<Light />
Soft, bright light and away from direct sunlight.
</div>
<div className="mist">
<Mist />
Loves humidity like the rainforest, the bathroom is a great room for this plant.
</div>
<div className="pruning">
<Pruning />
You can trim the asparagus fern if it gets unruly. It can go brown from being touched, so you can trim that off.
</div>
</section>
    </>
  )
}

export default Care;
