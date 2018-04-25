import React from 'react';

const Footer = () => (
  <div className="footerSectionContainer" >
    <p className="footerSectionContainer__motto" >Think Interactive First.</p>
    <ul className="footerSectionContainer__list" >
      <li>
        <a href="#top" className="footerSectionContainer__listItem" >About</a>
      </li>
      <li>
        <a href="#skills" className="footerSectionContainer__listItem" >Skills</a>
      </li>
      <li>
        <a href="#work" className="footerSectionContainer__listItem" >Work</a>
      </li>
      <li>
        <a href="#contact" className="footerSectionContainer__listItem" >Contact</a>
      </li>
    </ul>
  </div>
);

export default Footer;