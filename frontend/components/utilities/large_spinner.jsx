import React from 'react';

const LargeSpinner = ({style = {}, className = ''}) => (
  <div className={className + " loading-parent"} style={style}>
    <div className="loader"></div>
  </div>
);

export default LargeSpinner;
