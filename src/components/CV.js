import React from 'react';
import About from './About';
import Contact from './Contact';
import HireMe from './HireMe';
import Navbar from './Navbar';
import Skills from './Skills';
import Work from './Work';

// To do
// Current section highlighted in navbar
// Indicators in Work section
// Modernizr


const CV = (props) => (
  <div>
    <Navbar />
    <About />
    <Skills />
    <Work />
    <HireMe />
    <Contact />
  </div>
);

export default CV;