import React from 'react';

const ZoomPhoto = ({ closeZoomPhoto, zoomPhoto: {display, imageSrc}}) => {
  const handleClick = e => {
    console.log('we got clicked');
    e.preventDefault();
    closeZoomPhoto();
  };

  return (
    <div onClick={handleClick} className={display ? "zoom-overlay pointer-events" : "zoom-overlay"} style={{opacity: display ? '1' : '0'}}>
      <div>
        <img src={imageSrc} />
      </div>
    </div>
  );
}

export default ZoomPhoto;
