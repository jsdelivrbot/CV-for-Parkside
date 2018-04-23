import React from 'react';
import About from './About';
import HireMe from './HireMe';
import Navbar from './Navbar';
import Skills from './Skills';
import Work from './Work';

// To do
// Indicators in Work section
// Modernizr


const CV = (props) => (
  <div>
    <Navbar />
    <About />
    <Skills />
    <Work />
    <HireMe />
  </div>
);

export default CV;