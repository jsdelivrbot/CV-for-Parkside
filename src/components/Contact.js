import React from 'react';

const Contact = (props) => (
  <div className="contactSectionContainer" >
    <p className="contactSectionContainer__header" >Contact</p>
    <div className="containerSectionContainer__headerUnderline" ></div>
    <a href="https://github.com/erolaliyev" target="_blank" className="contactSectionContainer__link" >
      <p className="contactSectionContainer__link--name" >Github</p>
      <p className="contactSectionContainer__link--learnMore" >Learn more</p>
    </a>
    <a href="https://www.linkedin.com/in/erolaliyev/" target="_blank" className="contactSectionContainer__link" id="secondLink" >
      <p className="contactSectionContainer__link--name" >LinkedIn</p>
      <p className="contactSectionContainer__link--learnMore" >Learn more</p>
    </a>
    <a href="https://twitter.com/erol_aliyev" target="_blank" className="contactSectionContainer__link" >
      <p className="contactSectionContainer__link--name" >Twitter</p>
      <p className="contactSectionContainer__link--learnMore" >Learn more</p>
    </a>
  </div>
);

export default Contact;