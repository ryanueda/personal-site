import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Ryan Ueda</h2>
        <h4>Data Scientist | foodpanda | Medium.com Author</h4>
        <br />
        <p><a href="ryanueda34@gmail.com">ryanueda34@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        An ambitious and self-motivated second-year <br />
        <b>AI & Analytics</b> student at <a href="https://www.sp.edu.sg/soc/courses/full-time-diplomas/applied-AI-and-analytics/overview">Singapore Polytechnic</a> <br />
        seeking to use data science, machine learning <br />
        knowledge and management abilities to solve key business problems in the industry. <br />
        <br />
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
