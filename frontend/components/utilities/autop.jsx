import React from 'react';

const Autop = ({ children, style, className, onClick }) => {
  const handleClick = e => {
    e.preventDefault();
    closeZoomPhoto();
  };

  const options = _.merge({
    style: {},
    className: "",
    onClick: () => {}
  }, {
    style,
    className,
    onClick
  })

  return (
    <div style={options.style} className={options.className} onClick={options.onClick}>
      {
        children.split("\n").map((para, i) => (
          <p key={i}>
            {para}
          </p>
        ))
      }
    </div>
  );
}

export default Autop;
