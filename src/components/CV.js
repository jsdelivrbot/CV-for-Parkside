import React from 'react';
import About from './About';
import Navbar from './Navbar';
import Skills from './Skills';
import Work from './Work';

const CV = (props) => (
  <div>
    <Navbar />
    <About />
    <Skills />
    <Work />
  </div>
);

export default CV;