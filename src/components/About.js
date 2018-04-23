import React from 'react';

const About = (props) => (
  <div className="aboutSectionContainer" id="top" >
    <video autoPlay loop muted playsInline className="aboutSectionContainer__video">
      <source src="https://d2g3i7yf6pozhs.cloudfront.net/data/videos/parkside-final-v5.mp4" type="video/mp4" />
    </video>
    <div className="aboutSectionContainer__video--overlay" ></div>
    <div className="aboutSectionContainer__about">
      <h2 className="aboutSectionContainer__about__header">Erol Aliyev</h2>
      <p className="aboutSectionContainer__about__text">
        an enthusiastic frontend developer. I would love an opportunity to work 
        with this dream team at Parkside.
      </p>
    </div>
  </div>
);

export default About;
