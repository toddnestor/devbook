import React from 'react';

const PhotoItem = ({ photo, openZoomPhoto }) => {

  const handleZoomIn = e => {
    e.preventDefault();
    openZoomPhoto(photo.url);
  };

  return (
    <div className="photo-item" onClick={handleZoomIn}>
      <img src={photo.url} />
    </div>
  );
}

export default PhotoItem;
