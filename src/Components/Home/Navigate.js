import React from 'react';
import './Navigate.css';
import {ReactComponent as Palm} from '../../assets/palm.svg';
import {ReactComponent as Hang} from '../../assets/hanging.svg';
import {ReactComponent as Flowers} from '../../assets/flowers.svg'
import {
  Link
} from "react-router-dom";
const Navigate = () => {
  return (
    <>
    <section className="palm">
    <Palm />
    </section>
    <section className="hang">
    <Hang />
    </section>
    <section className="flowers">
    <Flowers />
    </section>
      <Link to="/growth" className="buttong">Growth</Link>
      <Link to="/care" className="buttonc">Care</Link>
      <Link to="/care" className="buttonw">Wish List</Link>
    </>
  )
};

export default Navigate;
