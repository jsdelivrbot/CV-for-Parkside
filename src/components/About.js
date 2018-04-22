import React from 'react';

const About = (props) => (
  <div className="container" id="top" >
    <video autoPlay loop muted playsInline className="container__video">
      <source src="https://d2g3i7yf6pozhs.cloudfront.net/data/videos/parkside-final-v5.mp4" type="video/mp4" />
    </video>
    <div className="container__video--overlay" ></div>
    <div className="container__about">
      <h2 className="container__about--header">Erol Aliyev</h2>
      <p className="container__about--text">an enthusiastic frontend developer. I would love an opportunity to work with this dream team at Parkside.</p>
    </div>
  </div>
);

export default About;
