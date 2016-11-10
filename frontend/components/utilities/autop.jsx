import React from 'react';
import LinkItUp from './link_it_up';

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
  });

  return (
    <div style={options.style} className={options.className + ' autop'} onClick={options.onClick}>
      {
        children.split("\n").map((para, i) => (
          <p key={i}>
            <LinkItUp options={{newTab: true}}>
              {para}
            </LinkItUp>
          </p>
        ))
      }
    </div>
  );
}

export default Autop;
