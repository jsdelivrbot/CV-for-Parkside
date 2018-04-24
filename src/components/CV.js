import React from 'react';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import HireMe from './HireMe';
import Navbar from './Navbar';
import Skills from './Skills';
import Work from './Work';

// To do
// Current section highlighted in navbar - Not gonna do
// Indicators in Work section - Not gonna do
// Test - How?
// Create settings.scss
// Production ready (especially webpack) - How?
// Modernizr


const CV = (props) => (
  <div>
    <Navbar />
    <About />
    <Skills />
    <Work />
    <HireMe />
    <Contact />
    <Footer />
  </div>
);

export default CV;