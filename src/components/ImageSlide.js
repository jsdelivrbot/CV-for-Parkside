import React from 'react';

const ImageSlide = (props) => (
  <div>
    <img src={props.url} alt="" className="workSectionContainer__image" />
    <div className="workSectionContainer__image--overlay" ></div>
    <div className="workSectionContainer__about" >
      <p className="workSectionContainer__about__header" >{props.header}</p>
      <p className="workSectionContainer__about__text" >{props.text}</p>
      <div className="workSectionContainer__about__buttons" >
        <a href={props.sourceCode} target="_blank" >Source Code</a>
        <a href={props.livePreview} target="_blank" >Live Preview</a>
      </div>
    </div>

  </div>
);

export default ImageSlide;