import React from 'react';

const Arrow = (props) => (
  <div
    className={`workSectionContainer__arrow-${props.direction}`}
    onClick={props.clickArrow}
  >
  </div>
);

export default Arrow;