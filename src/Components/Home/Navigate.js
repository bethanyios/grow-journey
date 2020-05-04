import React from 'react';
import './Navigate.css';
import {ReactComponent as Palm} from '../../assets/palm.svg';
import {ReactComponent as Hang} from '../../assets/hanging.svg';
import {ReactComponent as Flowers} from '../../assets/flowers.svg';
import {ReactComponent as Home1} from '../../assets/home1.svg';
import {ReactComponent as Home2} from '../../assets/home2.svg';
import {
  Link
} from "react-router-dom";



const Navigate = () => {
  return (
    <>
  <section className="home1">
  <Home1 />
  </section>
  <section className="home2">
  <Home2 />
  </section>

      <Link to="/growth" className="navigation">Growth</Link>
      <Link to="/care" className="navigation">Care</Link>

    </>
  )
};

export default Navigate;

//
// <section className="palm">
// <Palm />
// </section>
// <section className="hang">
// <Hang />
// </section>
// <section className="flowers">
// <Flowers />
//  </section>
//
