import React from 'react';
import Back from '../Buttons/Back.js';
import {
  Link
} from "react-router-dom";

import './Care.css';

const Care = () => {
  return (
    <>
        <Link to="/" className="back"><Back /></Link>
    </>
  )
}

export default Care;
